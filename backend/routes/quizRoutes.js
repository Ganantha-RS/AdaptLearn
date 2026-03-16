import express from "express"
import { submitQuiz } from "../controllers/quizController.js"
import { getQuiz } from "../controllers/quizController.js"

const router = express.Router()

router.post("/submit", submitQuiz)
router.get("/questions", getQuiz)

export default router