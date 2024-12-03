import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
dotenv.config();
const app = express();
import { PrismaClient } from "@prisma/client";
/* Imports for Route */
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import reviewRoutes from "./routes/reviewRoutes"

app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const prisma = new PrismaClient();

app.get("/api/products", async (req, res) => {
  const result = await prisma.products.findMany();
  res.json(result);
});

/* Routes */
// example: http://localhost:5000/dashboard
app.use("/dashboard", dashboardRoutes);
app.use("/products", productRoutes); // http://localhost:5000/products
app.use("/users", userRoutes); // http://localhost:5000/users
app.use("/expenses", expenseRoutes); // http://localhost:5000/expenses
app.use("/reviews", reviewRoutes) // http://localhost:5000/reviews

/* Server */
const port = Number(process.env.PORT) || 8000;
app.listen(port, "0.0.0.0", () => {
  console.log("Serving running on port", port);
});
