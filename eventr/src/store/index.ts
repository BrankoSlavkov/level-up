import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';
import eventReducer from './event/eventSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    event: eventReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
