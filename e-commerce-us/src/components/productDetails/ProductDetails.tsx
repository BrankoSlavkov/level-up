import { useParams } from 'react-router-dom';

export type ProductDetailsParams = {
  id: string;
};

export const ProductDetails = () => {
  const { id } = useParams<ProductDetailsParams>() as ProductDetailsParams;

  return <div>{id}</div>;
};
