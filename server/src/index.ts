
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
import dashboardRoutes from "./routes/dashboardRoutes"

app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const prisma = new PrismaClient();


app.get("/api/products", async (req, res) => {
  const result = await prisma.products.findMany();
  res.json(result)
});

/* Routes */
// example: http://localhost:8000/dashboard
app.use("/dashboard", dashboardRoutes);

/* Server */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Serving running on port", port);
});
