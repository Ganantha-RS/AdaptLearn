import { supabase } from "../config/supabaseClient.js"
import axios from "axios"

export const submitQuiz = async (req, res) => {

  const { name, email, learning_style, skill_level } = req.body

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        name,
        email,
        learning_style,
        skill_level
      }
    ])

  if (error) {
    return res.status(500).json(error)
  }

  res.json({
    message: "Quiz saved",
    data
  })
}

export const getQuiz = async (req, res) => {

  try {

    const response = await axios.get(
      "https://quizapi.io/api/v1/questions",
      {
        headers: {
          "X-Api-Key": process.env.QUIZ_API_KEY
        },
        params: {
          category: "code",
          limit: 5
        }
      }
    )

    res.json(response.data)

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch quiz"
    })
  }

}