import express from "express";
import {
  getRecommendations,
  getYoutubeMaterials,
  getRelatedMaterials,
} from "../controllers/recommendationController.js";

const router = express.Router();

router.get("/video", getYoutubeMaterials);
router.get("/materials", getRelatedMaterials);
router.get("/:user_id", getRecommendations);

export default router;
