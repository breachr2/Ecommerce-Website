"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export type Review = {
  id: number;
  name: string;
  title: string;
  content: string;
  imageName: string;
  imageUrl: string;
  productId: number;
  rating: number;
};

export type ReviewsProps = {
  reviews: Review[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
  if (reviews.length === 0) {
    return <div className="text-center text-2xl">No reviews yet...</div>;
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      {reviews && reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

const ReviewItem = ({ review }: { review: Review }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  return (
    <Card
      variant="outlined"
      key={review.id}
      sx={{ maxWidth: 700 }}
      className="min-w-full "
    >
      <CardContent className="flex flex-col gap-2 bg-gray-100 border-2 border-gray-400 shadow-sm rounded-sm">
        <div>
          <h1 className="text-xl ">{review.title}</h1>
          <Rating defaultValue={review.rating} precision={0.5} readOnly />
        </div>
        <div>{review.content}</div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Image
              src={review.imageUrl}
              alt={review.title}
              height={400}
              width={400}
            />
          </Box>
        </Modal>
        <div className="flex justify-between items-end">
          <Image
            className="cursor-pointer"
            src={review.imageUrl}
            alt={review.title}
            height={85}
            width={85}
            onClick={handleOpen}
          />
          <span className="underline text-gray-500">{review.name}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Reviews;
