import { createAsyncThunk } from '@reduxjs/toolkit';

import { PRODUCTS_URL } from '../../api/urls';

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (e: unknown) {
    const error = e as Error;
    console.error(error);
    return error;
  }
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  return await fetchData(PRODUCTS_URL);
});
