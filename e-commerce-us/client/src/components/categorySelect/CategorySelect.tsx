import { FC, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { fetchCategories } from '../../store/category/categoryAction';
import { getCategories } from '../../store/category/categorySelector';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Spinner } from '../spinner/Spinner';

import styles from './select.module.css';

type CategorySelectProps = {
  register: UseFormRegisterReturn<'categoryId'>;
};

export const CategorySelect: FC<CategorySelectProps> = ({ register }) => {
  const dispatch = useAppDispatch();
  const { categories, isLoading, error } = useAppSelector(getCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner size="sm" />;
  }

  if (error) {
    return <span className="error">{error}</span>;
  }

  return (
    <select {...register} className={styles.select}>
      {categories?.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};
