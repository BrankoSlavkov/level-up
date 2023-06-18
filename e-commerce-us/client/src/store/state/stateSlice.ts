import { createSlice } from '@reduxjs/toolkit';

import { fetchStates } from './stateAction';
import { State, StateState } from './stateTypes';

const initialState: StateState<State> = {
  isLoading: false,
  error: null,
  states: [],
};

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStates.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.states = payload;
      })
      .addCase(fetchStates.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Error fetching data';
      });
  },
});

export default stateSlice.reducer;
