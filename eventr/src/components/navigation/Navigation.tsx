import { Link, Outlet } from 'react-router-dom';

import styles from './navigation.module.scss';

export const Navigation = () => {
  return (
    <main className={styles._container}>
      <header className={styles._header}>
        <Link to="/events">All events</Link>
        <Link to="/events/add">New event</Link>
        <button type="button">Logout</button>
      </header>

      <Outlet />
    </main>
  );
};
