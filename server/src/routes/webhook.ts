import { Router } from "express";
import handleWebHook from "../controllers/webHookController.js";

const router = Router();
router.post("/", handleWebHook);

export default router;