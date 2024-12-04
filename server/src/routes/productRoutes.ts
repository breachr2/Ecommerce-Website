import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  getReviews,
  createReview,
} from "../controllers/productController";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
});

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.post("/:productId/reviews", upload.single("image"), createReview);
router.get("/:productId/reviews", getReviews);
router.get("/:productId", getProductById);

export default router;
