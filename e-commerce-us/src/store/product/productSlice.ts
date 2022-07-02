import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from './productAction';
import { Product, ProductState } from './productTypes';

const initialState: ProductState<Product> = {
  isLoading: false,
  error: null,
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Error fetching data';
      });
  },
});

export default productSlice.reducer;
