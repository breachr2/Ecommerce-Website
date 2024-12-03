import Reviews, { Review } from "./reviews";

type ParamsType = {
  params: {
    productId: string;
  };
};

const fetchProduct = async (productId: string) => {
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
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews/${productId}`,
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
    <div className="flex flex-col border-2 border-red-300 ">
      <h1>Product Id: {productId}</h1>
      <p>Product name : {product.name}</p>
      <p>Product Price: {product.price}</p>
      <p>Product Rating : {product.rating}</p>
      <p>Product Stock : {product.stockQuantity}</p>

      <Reviews reviews={reviews} />
    </div>
  );
};

export default ProductPage;
