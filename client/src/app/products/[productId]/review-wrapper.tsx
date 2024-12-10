"use client";

import { useState } from "react";
import ReviewForm from "./review-form";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Product } from "@/state/api";

type ReviewWrapperProps = {
  children: React.ReactNode;
  product: Product;
};

const ReviewWrapper = ({ children, product }: ReviewWrapperProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className=" flex flex-col items-center gap-4">
      <div className="flex flex-col gap-4 w-full max-w-[700px]">
        <h1 className="flex items-center text-2xl font-bold gap-2">
          All Reviews{" "}
          <span className="flex items-center text-blue-500 text-md font-normal">
            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              size="large"
            />{" "}
            {`(${product.rating})`}
          </span>
        </h1>

        <div>
          <Button
            variant="contained"
            onClick={() => setIsFormOpen((prevState) => !prevState)}
          >
            Create New Review
          </Button>
        </div>
      </div>
      {isFormOpen && <ReviewForm productId={product.productId} setIsFormOpen={setIsFormOpen}/>}
      <div className="w-full max-w-[700px]">{children}</div>
    </div>
  );
};

export default ReviewWrapper;
