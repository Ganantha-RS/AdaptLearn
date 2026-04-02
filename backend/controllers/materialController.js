import { supabase } from "../config/supabaseClient.js";
import { MATERIALS, LEVEL_ORDER } from "../data/materials.js";

export const getMaterials = async (req, res) => {
  try {
    const { level, format, topic } = req.query;
    let filtered = [...MATERIALS];

    if (level) filtered = filtered.filter((m) => m.level === level);
    if (format) filtered = filtered.filter((m) => m.format === format);
    if (topic)
      filtered = filtered.filter((m) =>
        m.topic.toLowerCase().includes(topic.toLowerCase())
      );

    filtered.sort((a, b) => {
      const ld = (LEVEL_ORDER[a.level] || 0) - (LEVEL_ORDER[b.level] || 0);
      return ld !== 0 ? ld : (a.order || 0) - (b.order || 0);
    });

    const list = filtered.map(({ content_text, ...rest }) => rest);
    res.json({ success: true, total: list.length, data: list });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const getMaterialById = async (req, res) => {
  try {
    const material = MATERIALS.find((m) => m.id === req.params.id);
    if (!material)
      return res.status(404).json({ success: false, message: "Materi tidak ditemukan" });
    res.json({ success: true, data: material });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const getMaterialsByLevel = async (req, res) => {
  try {
    const { level } = req.params;
    const { user_id } = req.query;

    const valid = ["Pemula", "Menengah", "Mahir"];
    if (!valid.includes(level))
      return res.status(400).json({ success: false, message: "Level tidak valid" });

    const levelMats = MATERIALS.filter((m) => m.level === level).sort(
      (a, b) => (a.order || 0) - (b.order || 0)
    );

    let progressMap = {};
    if (user_id) {
      const { data } = await supabase
        .from("user_progress")
        .select("material_id, status, completed_at")
        .eq("user_id", user_id);
      if (data) data.forEach((p) => (progressMap[p.material_id] = p));
    }

    const result = levelMats.map(({ content_text, ...m }) => ({
      ...m,
      progress: progressMap[m.id] || { status: "not_started", completed_at: null },
    }));

    res.json({ success: true, level, total: result.length, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const getTopics = async (req, res) => {
  const topics = [...new Set(MATERIALS.map((m) => m.topic))];
  res.json({ success: true, data: topics });
};
