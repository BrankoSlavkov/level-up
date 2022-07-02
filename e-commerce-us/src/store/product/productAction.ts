import { createAsyncThunk } from '@reduxjs/toolkit';

import { PRODUCTS_URL } from '../../api/urls';
import { ProductFormData } from './productTypes';

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

const postData = async (url: string, data: ProductFormData) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        stock: true,
        ...data,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
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

export const postProduct = createAsyncThunk('product/postProduct', async (data: ProductFormData) => {
  return await postData(PRODUCTS_URL, data);
});
