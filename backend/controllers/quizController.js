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
    console.log("Using Quiz API Key:", process.env.QUIZ_API_KEY ? "Loaded" : "MISSING")
    const response = await axios.get(
      "https://quizapi.io/api/v1/questions",
      {
        params: {
          api_key: process.env.QUIZ_API_KEY,
          category: "code",
          limit: 5
        }
      }
    )

    res.json(response.data)

  } catch (error) {
    console.error("QuizAPI Error Details:", error.response?.data || error.message)
    res.status(500).json({
      message: "Failed to fetch quiz"
    })
  }

}