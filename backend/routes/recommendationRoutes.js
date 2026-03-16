import express from "express"
import {
  getYoutubeMaterials,
  getTextMaterials
} from "../controllers/recommendationController.js"

const router = express.Router()

router.get("/video", getYoutubeMaterials)
router.get("/text", getTextMaterials)

export default router