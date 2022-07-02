import { Plus } from '../../assets/icons/Plus';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <div>sort dds</div>
      <div>
        <button className={styles['btn__product--add']}>
          <Plus />
          <span>Add Product</span>
        </button>
      </div>
    </header>
  );
};
