import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from './categoryAction';
import { Category, CategoryState } from './categoryTypes';

const initialState: CategoryState<Category> = {
  isLoading: false,
  error: null,
  categories: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Error fetching data';
      });
  },
});

export default categorySlice.reducer;
