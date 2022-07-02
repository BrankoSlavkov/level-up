import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { getProducts } from '../../store/product/productSelector';

import styles from './productDetails.module.css';

export type ProductDetailsParams = {
  id: string;
};

export const ProductDetails = () => {
  const { id } = useParams<ProductDetailsParams>() as ProductDetailsParams;
  const { products } = useAppSelector(getProducts);
  const product = products.find((product) => product.id === Number.parseInt(id));

  if (!product) {
    return null;
  }

  const productAvailable = product.stock ? (
    <span className={styles.available}>available</span>
  ) : (
    <span className={styles.unavailable}>unavailable</span>
  );

  return (
    <div className={styles['product__details--container']}>
      <div className={styles.product__header}>
        <div className={styles.product__title}>
          {product.id} - {product.title}
        </div>
        <div className={styles.product__price}>
          {productAvailable}
          <span>${product.price}</span>
        </div>
      </div>
      <div className={styles.img__container}>
        <img src={product.picture} alt={product.title} />
      </div>
      <div className={styles['product__details--text']}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};
