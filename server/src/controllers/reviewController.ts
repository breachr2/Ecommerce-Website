import { Request, Response } from "express";
import prisma from "../config/prismaClient";

export const getReviews = async (req: Request, res: Response) => {
  const { productId } = req.body;
  console.log(productId);

  try {
    const reviews = await prisma.reviews.findMany({
      where: { productId: productId },
    });

    res.json(reviews);
  } catch (err) {
    res.status(500).json("Server error has occured");
  }
};

export const createReview = async (req: Request, res: Response) => {
  const { originalname, buffer } = req.file as Express.Multer.File;
  const { title, content, productId, rating } = req.body;

  

  const newReview = await prisma.reviews.create({
    data: {
      title: title,
      imageName: originalname,
      content: content,
      rating: rating,
      productId: productId,
    },
  });
  res.status(201).json(newReview);
};
