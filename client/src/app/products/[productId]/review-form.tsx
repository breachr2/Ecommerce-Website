"use client";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/navigation";

const ReviewForm = ({ productId }: { productId: string }) => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("name", name);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("rating", String(rating));

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/reviews/${productId}`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel htmlFor="name">Name</InputLabel>
      <TextField
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />

      <InputLabel htmlFor="title">Title</InputLabel>
      <TextField
        type="text"
        name="title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Rating
        value={rating}
        name="rating"
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />

      <InputLabel htmlFor="content">Content</InputLabel>
      <TextField
        type="text"
        name="content"
        id="content"
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        multiline
        required
      />

      <InputLabel htmlFor="image">Image</InputLabel>
      <TextField
        type="file"
        name="image"
        id="image"
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          const files = target.files;
          if (files && files[0]) {
            setFile(files[0]);
          }
        }}
        inputProps={{ accept: "image/*" }}
        required
      />

      <Button type="submit">Create Review</Button>
    </form>
  );
};

export default ReviewForm;
