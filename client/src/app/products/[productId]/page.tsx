type ParamsType = {
  params: {
    productId: string;
  };
};

const ProductPage = ({ params }: ParamsType) => {
  return <div>{params.productId}</div>;
};

export default ProductPage;
