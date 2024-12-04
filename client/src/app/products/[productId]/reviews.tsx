import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Image from "next/image";

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
  return (
    <div className="flex flex-col gap-2 items-center">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review}/>
      ))}
    </div>
  );
};

const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <Card variant="outlined" key={review.id} sx={{ maxWidth: 700}} className="min-w-full ">
      <CardContent className="flex flex-col gap-2 bg-gray-100">
        <div>
          <h1 className="text-xl ">{review.title}</h1>
          <Rating defaultValue={review.rating} precision={0.5} readOnly />
        </div>
        <div>{review.content}</div>
        {true && (
          <div className="flex justify-between items-end">
            <Image
              src={review.imageUrl}
              alt={review.title}
              height={85}
              width={85}
            />
            <span className="underline text-gray-500">{review.name}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Reviews;
