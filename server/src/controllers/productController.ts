import { Request, Response } from "express";
import prisma from "../config/prismaClient";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client, { bucketName } from "../config/s3Client";
import mime from "mime-types";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const product = await prisma.products.findUnique({
      where: { productId: productId },
    });

    if (!product) {
      res.status(404).json(`Could not find product with ID ${productId}`);
      return;
    }

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json("Server error has occured");
  }
};

export const getReviews = async (req: Request, res: Response) => {
  const { productId } = req.params;
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
  const { originalname, buffer, mimetype } = req.file as Express.Multer.File;
  const { title, content, productId, rating } = req.body;

  const uploadParams = {
    Bucket: bucketName,
    Body: buffer,
    Key: originalname,
    ContentType: mimetype,
  };

  try {
    await s3Client.send(new PutObjectCommand(uploadParams));
  } catch (err) {
    res.status(500).json("Server error uploading file");
    return;
  }

  const extension = mime.extension(mimetype);
  const filename = `${originalname}.${extension}`;
  const imageUrl = `https://s3-ecommerce-storage-v2.s3.us-west-2.amazonaws.com/${filename}`;
  console.log(imageUrl);

  const newReview = await prisma.reviews.create({
    data: {
      title: title,
      imageName: originalname,
      content: content,
      rating: rating,
      productId: productId,
      imageUrl: imageUrl,
    },
  });
  res.status(201).json(newReview);
};
