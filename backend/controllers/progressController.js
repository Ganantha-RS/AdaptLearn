import { supabase } from "../config/supabaseClient.js";
import { MATERIALS, LEVEL_NEXT, LEVEL_PREV } from "../data/materials.js";

export const saveProgress = async (req, res) => {
  try {
    const { user_id, material_id, status } = req.body;

    if (!user_id || !material_id || !status) {
      return res.status(400).json({ success: false, message: "user_id, material_id, dan status wajib diisi" });
    }

    const validStatus = ["in_progress", "completed", "not_started"];
    if (!validStatus.includes(status)) {
      return res.status(400).json({ success: false, message: "Status tidak valid. Gunakan: not_started, in_progress, completed" });
    }

    const { data: existing } = await supabase
      .from("user_progress")
      .select("id")
      .eq("user_id", user_id)
      .eq("material_id", material_id)
      .single();

    let result;
    if (existing) {
      const updateData = { status };
      if (status === "completed") updateData.completed_at = new Date().toISOString();

      const { data, error } = await supabase
        .from("user_progress")
        .update(updateData)
        .eq("user_id", user_id)
        .eq("material_id", material_id)
        .select()
        .single();

      if (error) return res.status(500).json({ success: false, error });
      result = data;
    } else {
      const insertData = { user_id, material_id, status };
      if (status === "completed") insertData.completed_at = new Date().toISOString();

      const { data, error } = await supabase
        .from("user_progress")
        .insert([insertData])
        .select()
        .single();

      if (error) return res.status(500).json({ success: false, error });
      result = data;
    }

    res.json({ success: true, message: "Progress disimpan", data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const getProgress = async (req, res) => {
  try {
    const { user_id } = req.params;

    const { data, error } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user_id)
      .order("completed_at", { ascending: false });

    if (error) return res.status(500).json({ success: false, error });

    const progressMap = {};
    (data || []).forEach((p) => (progressMap[p.material_id] = p));

    const annotated = MATERIALS.map((m) => ({
      id: m.id,
      title: m.title,
      level: m.level,
      topic: m.topic,
      format: m.format,
      order: m.order,
      thumbnail: m.thumbnail,
      progress: progressMap[m.id] || { status: "not_started", completed_at: null },
    }));

    const stats = {};
    for (const level of ["Pemula", "Menengah", "Mahir"]) {
      const levelMats = annotated.filter((m) => m.level === level);
      const completed = levelMats.filter((m) => m.progress.status === "completed").length;
      stats[level] = {
        total: levelMats.length,
        completed,
        in_progress: levelMats.filter((m) => m.progress.status === "in_progress").length,
        not_started: levelMats.filter((m) => m.progress.status === "not_started").length,
        percentage: levelMats.length ? Math.round((completed / levelMats.length) * 100) : 0,
      };
    }

    res.json({ success: true, data: annotated, stats });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const getProgressSummary = async (req, res) => {
  try {
    const { user_id } = req.params;

    const { data, error } = await supabase
      .from("user_progress")
      .select("material_id, status")
      .eq("user_id", user_id);

    if (error) return res.status(500).json({ success: false, error });

    const progressMap = {};
    (data || []).forEach((p) => (progressMap[p.material_id] = p.status));

    const stats = {};
    for (const level of ["Pemula", "Menengah", "Mahir"]) {
      const levelMats = MATERIALS.filter((m) => m.level === level);
      const completed = levelMats.filter((m) => progressMap[m.id] === "completed").length;
      stats[level] = {
        total: levelMats.length,
        completed,
        percentage: levelMats.length ? Math.round((completed / levelMats.length) * 100) : 0,
      };
    }

    res.json({ success: true, stats });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const reassessLevel = async (req, res) => {
  try {
    const { user_id, quiz_score } = req.body;

    if (!user_id) return res.status(400).json({ success: false, message: "user_id wajib diisi" });

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("skill_level, learning_style")
      .eq("id", user_id)
      .single();

    if (userError || !userData) {
      return res.status(404).json({ success: false, message: "User tidak ditemukan" });
    }

    const currentLevel = userData.skill_level;

    const { data: progressData } = await supabase
      .from("user_progress")
      .select("material_id, status")
      .eq("user_id", user_id)
      .eq("status", "completed");

    const completedIds = new Set((progressData || []).map((p) => p.material_id));
    const currentLevelMats = MATERIALS.filter((m) => m.level === currentLevel);
    const completedCount = currentLevelMats.filter((m) => completedIds.has(m.id)).length;
    const completionPct = currentLevelMats.length
      ? Math.round((completedCount / currentLevelMats.length) * 100)
      : 0;

    const score = quiz_score ?? null;

    let newLevel = currentLevel;
    let reason = "";

    if (score !== null) {
      if (score >= 80 && completionPct >= 80) {
        newLevel = LEVEL_NEXT[currentLevel] || currentLevel;
        reason =
          newLevel !== currentLevel
            ? `Selamat! Nilai kuis ${score} dan progress ${completionPct}% — kamu naik ke level ${newLevel}!`
            : "Kamu sudah berada di level tertinggi. Pertahankan! 🏆";
      } else if (score < 40 && completionPct < 30) {
        newLevel = LEVEL_PREV[currentLevel] || currentLevel;
        reason =
          newLevel !== currentLevel
            ? `Nilai kuis ${score} dan progress ${completionPct}% masih rendah — disarankan kembali ke level ${newLevel} untuk memperkuat fondasi.`
            : "Kamu sudah di level awal. Semangat belajar! 💪";
      } else {
        reason = `Nilai kuis ${score} dan progress ${completionPct}% — tetap di level ${currentLevel}. Teruskan!`;
      }
    } else {
      if (completionPct >= 100) {
        newLevel = LEVEL_NEXT[currentLevel] || currentLevel;
        reason =
          newLevel !== currentLevel
            ? `Semua materi level ${currentLevel} selesai! Lanjut ke level ${newLevel}.`
            : "Semua level sudah diselesaikan. Luar biasa! 🎉";
      } else {
        reason = `Progress ${completionPct}% — selesaikan semua materi level ${currentLevel} terlebih dahulu.`;
      }
    }

    if (newLevel !== currentLevel) {
      const { error: updateError } = await supabase
        .from("users")
        .update({ skill_level: newLevel })
        .eq("id", user_id);

      if (updateError) {
        return res.status(500).json({ success: false, message: "Gagal update level", error: updateError });
      }
    }

    res.json({
      success: true,
      previous_level: currentLevel,
      new_level: newLevel,
      level_changed: newLevel !== currentLevel,
      completion_percentage: completionPct,
      quiz_score: score,
      reason,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
