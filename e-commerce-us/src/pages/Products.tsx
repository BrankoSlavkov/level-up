import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchProducts } from '../store/product/productAction';
import { useAppDispatch } from '../store/hooks';
import { ProductsList } from '../components/productsList/ProductsList';

import styles from './product.module.css';
import { Header } from '../components/header/Header';
import { Modal } from '../components/modal/Modal';

export const Products = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <main className={styles.main__container}>
      <Header showModalHandler={showModalHandler} />
      <div className={styles.products__container}>
        <ProductsList />
        <div className={styles.product__details}>
          <Outlet />
        </div>
      </div>
      {showModal && (
        <Modal closeHandler={closeModalHandler}>
          <div>rasjndmalks';dsa</div>
        </Modal>
      )}
    </main>
  );
};
