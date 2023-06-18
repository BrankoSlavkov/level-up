import { FC } from 'react';

import styles from './spinner.module.css';

type SpinnerProps = {
  size: 'sm' | 'lg';
};

export const Spinner: FC<SpinnerProps> = ({ size = 'lg' }) => {
  return <div className={`${styles.loader} ${styles[size]}`} />;
};
