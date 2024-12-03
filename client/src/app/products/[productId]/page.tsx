type ParamsType = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: ParamsType) => {
  const { productId } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${productId}`,
    {
      cache: "no-store",
    }
  );

  const product = await response.json();

  if (!response.ok) {
    return <h1 className="text-center text-3xl text-red-500">{product}</h1>;
  }

  return (
    <div>
      <h1>Product Id: {productId}</h1>
      <p>Product name : {product.name}</p>
      <p>Product Price: {product.price}</p>
      <p>Product Rating : {product.rating}</p>
      <p>Product Stock : {product.stockQuantity}</p>
    </div>
  );
};

export default ProductPage;
