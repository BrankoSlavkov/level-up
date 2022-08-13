import { Outlet } from 'react-router-dom';

import styles from './navigation.module.scss';

export const Navigation = () => {
  return (
    <main className={styles._container}>
      <div>Brankooo</div>
      <Outlet />
    </main>
  );
};
