import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchProducts } from '../store/product/productAction';
import { useAppDispatch } from '../store/hooks';
import { ProductsList } from '../components/productsList/ProductsList';

import styles from './product.module.css';

export const Products = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.products__container}>
      <ProductsList />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
