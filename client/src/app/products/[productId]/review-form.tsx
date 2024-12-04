"use client";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { SetStateAction, useState } from "react";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/navigation";

type ReviewFormProps = {
  productId: string;
  setIsFormOpen: React.Dispatch<SetStateAction<boolean>>;
};

const ReviewForm = ({ productId, setIsFormOpen }: ReviewFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("name", name);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("rating", String(rating));
    formData.append("productId", productId);

    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${productId}/reviews`,
      {
        method: "POST",
        body: formData,
      }
    );
    setIsFormOpen(false);
    router.refresh();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-2 w-full max-w-[450px] p-8 border border-neutral-400 rounded-md bg-gray-200 "
    >
      <div>
        <InputLabel htmlFor="name">Name</InputLabel>
        <TextField
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          size="small"
        />
      </div>

      <div>
        <InputLabel htmlFor="title">
          Title <RedAsterisk />
        </InputLabel>
        <TextField
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          size="small"
        />
      </div>

      <div>
        <InputLabel htmlFor="rating">
          Rating <RedAsterisk />
        </InputLabel>
        <Rating
          value={rating}
          name="rating"
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          size="medium"
        />
      </div>

      <div>
        <InputLabel htmlFor="content">
          Content <RedAsterisk />
        </InputLabel>
        <TextField
          type="text"
          name="content"
          id="content"
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          multiline
          required
          fullWidth
        />
      </div>

      <div>
        <InputLabel htmlFor="image">
          Upload File <RedAsterisk />
        </InputLabel>
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
          fullWidth
          size="small"
        />
      </div>

      <div className="flex justify-end mt-2">
        <Button type="submit" variant="contained">
          Create Review
        </Button>
      </div>
    </form>
  );
};

const RedAsterisk = () => {
  return <span className="text-red-600">*</span>;
};

export default ReviewForm;
