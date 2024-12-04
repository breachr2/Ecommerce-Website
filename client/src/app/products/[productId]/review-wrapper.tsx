"use client";

import { useState } from "react";
import ReviewForm from "./review-form";
import Button from "@mui/material/Button";

const ReviewWrapper = ({
  children,
  productId,
}: {
  children: React.ReactNode;
  productId: string;
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className=" flex flex-col items-center gap-2">
      <div>
        <h1 className="text-2xl font-bold ">All Reviews</h1>
        <Button
          variant="contained"
          onClick={() => setIsFormOpen((prevState) => !prevState)}
        >
          New Review
        </Button>
      </div>
      {isFormOpen && <ReviewForm productId={productId} />}
      <div className="w-full max-w-[700px]">{children}</div>
    </div>
  );
};

export default ReviewWrapper;
