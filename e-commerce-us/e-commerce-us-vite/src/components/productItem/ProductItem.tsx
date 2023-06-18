import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Product } from 'store/product/productTypes';

import styles from './productItem.module.css';

type ProductItemProps = {
  product: Product;
};

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const availableClass = product.stock ? styles.available : styles.unavailable;
  const availableText = product.stock ? 'available' : 'unavailable';

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${styles.product__card} ${styles.active}`
          : styles.product__card
      }
      to={product.id.toString()}
    >
      <div className={styles.product__details}>
        <span>{product.title}</span>
        <span className={availableClass}>{availableText}</span>
      </div>
      <span className={styles.product__price}>${product.price}</span>
    </NavLink>
  );
};
