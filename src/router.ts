import { Router } from "express";
import * as routes from "./routes";

const router = Router();

router.get("/ping", routes.ping);

export default router;
