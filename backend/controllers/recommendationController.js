import axios from "axios";
import { supabase } from "../config/supabaseClient.js";

export const getRecommendations = async (req, res) => {
  try {
    const { user_id } = req.params;

    const { data: user, error: userError } = await supabase
      .from("users")
      .select("skill_level, learning_style")
      .eq("id", user_id)
      .single();

    if (userError || !user) {
      return res.status(404).json({ success: false, message: "User tidak ditemukan" });
    }

    const { skill_level, learning_style } = user;

    const { data: progressData } = await supabase
      .from("user_progress")
      .select("material_id, status, updated_at")
      .eq("user_id", user_id);

    const progressMap = {};
    (progressData || []).forEach(p => progressMap[p.material_id] = p);

    const completedIds = new Set(
      (progressData || []).filter((p) => p.status === "completed").map((p) => p.material_id)
    );
    const inProgressIds = new Set(
      (progressData || []).filter((p) => p.status === "in_progress").map((p) => p.material_id)
    );

    const { data: levelMatsData, error: levelMatsError } = await supabase
      .from("materials")
      .select("id, title, external_id, source_api, format, level, topic, created_at, thumbnail")
      .eq("level", skill_level)
      .order("created_at", { ascending: true });

    if (levelMatsError) throw levelMatsError;
    const levelMats = levelMatsData || [];

    const inProgressMats = levelMats
      .filter((m) => inProgressIds.has(m.id))
      .map((m) => ({ ...m, recommendation_reason: "Sedang dipelajari — lanjutkan!" }))
      .sort((a, b) => {
        const timeA = new Date(progressMap[a.id]?.updated_at || 0).getTime();
        const timeB = new Date(progressMap[b.id]?.updated_at || 0).getTime();
        return timeB - timeA;
      });

    const notStartedMats = levelMats
      .filter((m) => !completedIds.has(m.id) && !inProgressIds.has(m.id))
      .slice(0, 3)
      .map((m) => ({ ...m, recommendation_reason: "Materi berikutnya untuk level kamu" }));

    const recommended = [...inProgressMats, ...notStartedMats];

    const completedExternalIds = new Set(
      levelMats.filter((m) => completedIds.has(m.id) && m.external_id).map((m) => m.external_id)
    );

    let videos = [];
    if (process.env.YOUTUBE_API_KEY) {
      try {
        const topicsToSearch = [...new Set(levelMats.slice(0, 2).map((m) => m.topic))];
        const query = `javascript ${topicsToSearch[0] || skill_level} tutorial bahasa indonesia`;

        const ytRes = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            q: query,
            type: "video",
            maxResults: 4,
            relevanceLanguage: "id",
            key: process.env.YOUTUBE_API_KEY,
          },
          timeout: 5000,
        });

        videos = ytRes.data.items
          .filter((v) => !completedExternalIds.has(v.id.videoId))
          .map((v) => ({
            title: v.snippet.title,
            channel: v.snippet.channelTitle,
            url: `https://youtube.com/watch?v=${v.id.videoId}`,
            external_id: v.id.videoId,
            thumbnail: v.snippet.thumbnails.medium.url,
            published_at: v.snippet.publishedAt,
            level: skill_level,
            topic: topicsToSearch[0] || "Umum"
          }));
      } catch (ytErr) {
        console.warn("YouTube API error:", ytErr.message);
      }
    }

    res.json({
      success: true,
      user_level: skill_level,
      learning_style,
      recommended_materials: recommended,
      youtube_videos: videos,
      total_materials_at_level: levelMats.length,
      completed_at_level: levelMats.filter((m) => completedIds.has(m.id)).length,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const getYoutubeMaterials = async (req, res) => {
  try {
    const { topic } = req.query;
    if (!topic) return res.status(400).json({ success: false, message: "Query 'topic' wajib diisi" });

    if (!process.env.YOUTUBE_API_KEY) {
      return res.status(503).json({ success: false, message: "YouTube API key tidak tersedia" });
    }

    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        q: `javascript ${topic} tutorial`,
        type: "video",
        maxResults: 5,
        key: process.env.YOUTUBE_API_KEY,
      },
      timeout: 8000,
    });

    const videos = response.data.items.map((video) => ({
      title: video.snippet.title,
      channel: video.snippet.channelTitle,
      url: `https://youtube.com/watch?v=${video.id.videoId}`,
      thumbnail: video.snippet.thumbnails.medium.url,
    }));

    res.json({ success: true, data: videos });
  } catch (error) {
    console.error("YouTube error:", error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Gagal mengambil video YouTube" });
  }
};

export const getRelatedMaterials = async (req, res) => {
  try {
    const { topic, level } = req.query;

    let query = supabase.from("materials").select("id, title, external_id, source_api, format, level, topic, created_at, thumbnail");

    if (level) {
      query = query.eq("level", level);
    }
    if (topic) {
      query = query.or(`topic.ilike.%${topic}%,title.ilike.%${topic}%`);
    }

    const { data: result, error } = await query;
    if (error) throw error;

    res.json({ success: true, total: result.length, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
