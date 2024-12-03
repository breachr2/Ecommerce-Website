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
router.get("/:productId", getProductById);
router.get("/:productId/reviews", getReviews);
router.post("/:productId/reviews", upload.single("image"), createReview);

export default router;
