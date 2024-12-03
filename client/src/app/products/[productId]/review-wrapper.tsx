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
    <div>
      <div>
        <h1>Reviews</h1>
        <Button onClick={() => setIsFormOpen((prevState) => !prevState)}>
          New Review
        </Button>
        {isFormOpen && <ReviewForm productId={productId} />}
      </div>
      {children}
    </div>
  );
};

export default ReviewWrapper;
