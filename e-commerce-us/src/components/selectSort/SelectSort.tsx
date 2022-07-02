import { ChangeEvent } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { sortProducts } from '../../store/product/productSlice';
import { ProductsSortBy } from '../../store/product/productTypes';

export const SelectSort = () => {
  const dispatch = useAppDispatch();

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    dispatch(sortProducts(e.target.value as ProductsSortBy));
  };

  return (
    <select onChange={changeHandler}>
      <option value="name">Name</option>
      <option value="price">Price</option>
    </select>
  );
};
