import { Router, type IRouter } from "express";
import healthRouter from "./health";
import ttsRouter from "./tts";
import chatRouter from "./chat";

const router: IRouter = Router();

router.use(healthRouter);
router.use(ttsRouter);
router.use(chatRouter);

export default router;
