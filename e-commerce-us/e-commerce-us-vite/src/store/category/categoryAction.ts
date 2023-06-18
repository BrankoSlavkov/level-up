import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchData } from '../../api/fetchDate';
import { CATEGORIES_URL } from '../../constants/urls';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  return await fetchData(CATEGORIES_URL);
});
