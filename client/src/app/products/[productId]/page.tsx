import Reviews, { Review } from "./reviews";
import ReviewWrapper from "./review-wrapper";
import Image from "next/image";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import { Product } from "@/state/api";

type ParamsType = {
  params: {
    productId: string;
  };
};

const fetchProduct = async (productId: string): Promise<Product> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await response.json();
  return product;
};

const fetchReviews = async (productId: string): Promise<Review[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${productId}/reviews`,
    { cache: "no-store" }
  );

  const reviews = await response.json();
  return reviews;
};

const ProductPage = async ({ params }: ParamsType) => {
  const { productId } = await params;
  const product = await fetchProduct(productId);
  const reviews = await fetchReviews(productId);

  if (!product) {
    return <h1 className="text-center text-3xl text-red-500">{product}</h1>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center mt-6">
        <div className="flex flex-col sm:flex-row gap-8 ">
          <Image
            src={`https://s3-ecommerce-storage-v2.s3.us-west-2.amazonaws.com/product${
              Math.floor(Math.random() * 3) + 1
            }.png`}
            alt={product.name}
            height={400}
            width={400}
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-2xl font-semibold">{product.name}</p>
              <p className="text-gray-500 ">ID : {productId}</p>
              <p className="text-red-600">{product.price}$</p>
              <span className="flex items-center text-blue-500">
                <Rating
                  value={product.rating}
                  precision={0.5}
                  readOnly
                  size="large"
                />{" "}
                {`(${product.rating})`}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg">
                Stock Quantity : {product.stockQuantity}
              </p>
              <Button
                variant="contained"
                className="bg-neutral-700 w-full"
                color="error"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Divider flexItem />
      <ReviewWrapper product={product}>
        <Reviews reviews={reviews} />
      </ReviewWrapper>
    </div>
  );
};

export default ProductPage;
