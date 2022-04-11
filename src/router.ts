import { Router } from "express";
import * as routes from "./routes";

const router = Router();

router.get("/ping", routes.ping);
router.get("/message-board", routes.messageBoard);
router.post("/add-message", routes.addMessage);

export default router;
