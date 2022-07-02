import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../api/fetchDate';
import { postData } from '../../api/postData';

import { PRODUCTS_URL } from '../../api/urls';
import { ProductFormData } from './productTypes';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  return await fetchData(PRODUCTS_URL);
});

export const postProduct = createAsyncThunk('product/postProduct', async (data: ProductFormData) => {
  return await postData<ProductFormData>(PRODUCTS_URL, data);
});
