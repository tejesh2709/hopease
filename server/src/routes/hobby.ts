import { Router } from "express";
import { getHobbyRecommendations, getHobbyLevels } from "../controllers/hobbyController.ts";

const router = Router();

router.post("/suggestions", getHobbyRecommendations);
router.post("/levels/:hobby", getHobbyLevels);

export default router;