import { Router } from "express";
import handleWebHook from "../controllers/webHookController.ts";

const router = Router();
router.post("/", handleWebHook);

export default router;