import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product/productSlice';
import stateReducer from './state/stateSlice';
import categoryReducer from './category/categorySlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    state: stateReducer,
    category: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
