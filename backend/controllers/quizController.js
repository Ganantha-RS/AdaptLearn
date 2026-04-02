import { supabase } from "../config/supabaseClient.js"
import axios from "axios"

export const submitQuizResult = async (req, res) => {
  const { userId, learning_style, skill_level } = req.body

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" })
  }

  const styleMap = {
    "visual": "Visual",
    "text": "Teks"
  };

  const levelMap = {
    "Beginner Level": "Pemula",
    "Intermediate Level": "Menengah",
    "Advanced Level": "Mahir"
  };

  const dbStyle = styleMap[learning_style] || "Teks";
  const dbLevel = levelMap[skill_level] || "Pemula";

  const { data, error } = await supabase
    .from("users")
    .update({
      learning_style: dbStyle,
      skill_level: dbLevel
    })
    .eq("id", userId)

  if (error) {
    console.error("Database update error details:", error);
    return res.status(500).json(error)
  }

  res.json({
    message: "User assessment saved successfully",
    data
  })
}

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
    .select()

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
    console.log("Fetching from QuizAPI with Key:", process.env.QUIZ_API_KEY?.substring(0, 8) + "...")
    const response = await axios.get(
      "https://quizapi.io/api/v1/questions",
      {
        params: {
          api_key: process.env.QUIZ_API_KEY,
          quiz_id: "cmn6umdfm00z0m7uthscjb7vk",
          include_answers: "true",
          limit: 10
        }
      }
    )

    console.log("QuizAPI Raw Data:", JSON.stringify(response.data).substring(0, 200))

    let rawQuestions = [];
    if (response.data && response.data.success && Array.isArray(response.data.data)) {
      rawQuestions = response.data.data;
    } else if (Array.isArray(response.data)) {
      rawQuestions = response.data;
    } else if (response.data && Array.isArray(response.data.questions)) {
      rawQuestions = response.data.questions;
    }
    
    if (!rawQuestions || rawQuestions.length === 0) {
      console.error("No questions found in QuizAPI response:", JSON.stringify(response.data).substring(0, 500));
      return res.status(404).json({ message: "No questions found for this quiz" });
    }

    const questions = rawQuestions.map((q, qIndex) => {
      const questionContent = q.text || q.question;
      const correctAnswers = q.correct_answers || {};
      
      const isTrue = (val) => val === true || val === 1 || String(val).toLowerCase() === "true" || String(val) === "1";

      let options = [];
      if (Array.isArray(q.answers)) {
        options = q.answers.map((ans, idx) => {
          const id = ans.id || String.fromCharCode(97 + idx);
          const isCorrect = 
            isTrue(ans.isCorrect) || 
            isTrue(ans.is_correct) ||
            isTrue(correctAnswers[`answer_${id}_correct`]) ||
            isTrue(correctAnswers[`${id}_correct`]) ||
            isTrue(correctAnswers[id]) ||
            q.correct_answer === id ||
            q.correct_answer === `answer_${id}` ||
            Object.entries(correctAnswers).some(([k, v]) => k.toLowerCase().includes(`${id}_correct`) && isTrue(v));

          return { id: id, text: ans.text || ans.answer || String(ans), is_correct: isCorrect };
        });
      } else if (q.answers && typeof q.answers === 'object') {
        options = Object.entries(q.answers)
          .filter(([_, text]) => text !== null)
          .map(([key, text]) => {
            const id = key.replace("answer_", "");
            const isCorrect = 
              isTrue(correctAnswers[`${key}_correct`]) ||
              isTrue(correctAnswers[`${id}_correct`]) ||
              isTrue(correctAnswers[key]) ||
              isTrue(correctAnswers[id]) ||
              q.correct_answer === key ||
              q.correct_answer === id ||
              Object.entries(correctAnswers).some(([k, v]) => k.toLowerCase().includes(`${id}_correct`) && isTrue(v));

            return { id: id, text: text, is_correct: isCorrect };
          });
      }

      if (options.length > 0 && !options.some(o => o.is_correct)) {
        if (q.correct_answer) {
          options = options.map(o => ({
            ...o, 
            is_correct: o.id === q.correct_answer || `answer_${o.id}` === q.correct_answer
          }));
        }
      }

      return {
        id: q.id,
        question: questionContent,
        options: options,
        difficulty: q.difficulty || "Easy",
        multiple: q.multiple_correct_answers === "true" || q.type === "MULTIPLE_CHOICE"
      }
    });

    res.json(questions)

  } catch (error) {
    console.error("QuizAPI Error Details:", error.response?.data || error.message)
    res.status(500).json({
      message: "Failed to fetch quiz"
    })
  }

}