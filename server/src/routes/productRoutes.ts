import { Router } from "express";
import { createProduct, getProducts, getProductById } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.get("/:productId", getProductById)
router.post("/", createProduct);

export default router;
