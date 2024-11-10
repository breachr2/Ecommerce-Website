import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";
import exp from "constants";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;