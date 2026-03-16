import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import quizRoutes from "./routes/quizRoutes.js"
import materialRoutes from "./routes/materialRoutes.js"
import progressRoutes from "./routes/progressRoutes.js"
import recommendationRoutes from "./routes/recommendationRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/quiz", quizRoutes)
app.use("/api/materials", materialRoutes)
app.use("/api/progress", progressRoutes)
app.use("/api/recommendations", recommendationRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})