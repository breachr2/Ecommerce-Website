import { Router } from "express";
import { getReviews, createReview } from "../controllers/reviewController";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
});

const router = Router();

router.get("/", getReviews);
router.post("/", upload.single("image"), createReview);

export default router;
