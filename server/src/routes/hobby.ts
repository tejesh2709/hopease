import { Router } from "express";
import { getHobbyRecommendations, getHobbyLevels } from "../controllers/hobbyController.js";

const router = Router();

router.post("/suggestions", getHobbyRecommendations);
router.post("/levels/:hobby", getHobbyLevels);

export default router;