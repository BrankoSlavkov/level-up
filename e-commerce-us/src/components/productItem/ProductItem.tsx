import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Product } from '../../store/product/productTypes';

import styles from './productItem.module.css';

type ProductItemProps = {
  product: Product;
};

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const navigate = useNavigate();

  const productAvailable = product.stock ? (
    <span className={styles.available}>available</span>
  ) : (
    <span className={styles.unavailable}>unavailable</span>
  );

  return (
    <div className={styles.product__card} onClick={() => navigate(`/products/${product.id}`)}>
      <div className={styles.product__details}>
        <span>{product.id}</span>
        <span>{product.title}</span>
        {productAvailable}
      </div>
      <span className={styles.product__price}>${product.price}</span>
    </div>
  );
};
