import { supabase } from "../config/supabaseClient.js"

export const saveProgress = async (req, res) => {

  const { user_id, material_id, status } = req.body

  const { data, error } = await supabase
    .from("user_progress")
    .insert([
      {
        user_id,
        material_id,
        status
      }
    ])

  if (error) {
    return res.status(500).json(error)
  }

  res.json({
    message: "Progress saved",
    data
  })
}