import { FC } from 'react';

import { Plus } from '../../assets/icons/Plus';
import { SelectSort } from '../selectSort/SelectSort';

import styles from './header.module.css';

export type HeaderProps = {
  showModalHandler: () => void;
};

export const Header: FC<HeaderProps> = ({ showModalHandler }) => {
  return (
    <header className={styles.header__container}>
      <div className={styles.select__sort}>
        <SelectSort />
      </div>
      <div className={styles.button__container}>
        <button className={styles['btn__product--add']} onClick={showModalHandler}>
          <Plus />
          <span>Add Product</span>
        </button>
      </div>
    </header>
  );
};
