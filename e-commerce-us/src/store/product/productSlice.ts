import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sortByName, sortByPrice } from '../../helpers/sort';

import { fetchProducts, postProduct } from './productAction';
import { Product, ProductState, ProductsSortBy, ProductFormData } from './productTypes';

const initialState: ProductState<Product> = {
  isLoading: false,
  error: null,
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sortProducts(state, { payload }: PayloadAction<ProductsSortBy>) {
      const { products } = state;

      switch (payload) {
        case 'price':
          state.products = sortByPrice(products);
          break;

        case 'name':
        default:
          state.products = sortByName(products);
      }
    },
  },
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
      })
      .addCase(postProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push({
          ...action.payload,
          id: state.products.length + 1,
        });
      })
      .addCase(postProduct.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Error fetching data';
      });
  },
});

export const { sortProducts } = productSlice.actions;

export default productSlice.reducer;
