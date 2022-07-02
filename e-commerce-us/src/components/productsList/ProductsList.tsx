import { memo } from 'react';
import { useAppSelector } from '../../store/hooks';

import { getProducts } from '../../store/product/productSelector';
import { ProductItem } from '../productItem/ProductItem';

import styles from './productList.module.css';

export const ProductsList = memo(() => {
  const { isLoading, error, products } = useAppSelector(getProducts);

  return (
    <div className={styles['product__list-container']}>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
});
