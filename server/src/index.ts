
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
dotenv.config();
const app = express();
import { PrismaClient } from "@prisma/client";

app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const prisma = new PrismaClient();

const port = process.env.PORT || 8000;

app.get("/api/products", async (req, res) => {
  const result = await prisma.products.findMany();
  res.json(result)
});

app.get("/", (req, res) => {
  res.json("hello15151")
});

app.listen(port, () => {
  console.log("Serving running on port", port);
});
