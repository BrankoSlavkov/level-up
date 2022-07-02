import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchProducts } from '../store/product/productAction';
import { useAppDispatch } from '../store/hooks';
import { ProductsList } from '../components/productsList/ProductsList';

import styles from './product.module.css';
import { Header } from '../components/header/Header';

export const Products = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main className={styles.main__container}>
      <Header />
      <div className={styles.products__container}>
        <ProductsList />
        <div className={styles.product__details}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};
