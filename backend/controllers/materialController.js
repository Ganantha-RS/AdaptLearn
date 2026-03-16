import { supabase } from "../config/supabaseClient.js"

export const getMaterials = async (req, res) => {

  const { style } = req.params

  const { data, error } = await supabase
    .from("materials")
    .select("*")
    .eq("format", style)

  if (error) {
    return res.status(500).json(error)
  }

  res.json(data)
}