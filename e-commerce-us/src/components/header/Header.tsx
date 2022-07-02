import { Plus } from '../../assets/icons/Plus';
import { SelectSort } from '../selectSort/SelectSort';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <div className={styles.select__sort}>
        <SelectSort />
      </div>
      <div className={styles.button__container}>
        <button className={styles['btn__product--add']}>
          <Plus />
          <span>Add Product</span>
        </button>
      </div>
    </header>
  );
};
