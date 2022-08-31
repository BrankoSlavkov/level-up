import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

type UiSlice = {
  showDeleteModal: boolean;
};

const initialState: UiSlice = {
  showDeleteModal: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showDeleteModal = !state.showDeleteModal;
    },
  },
});

export const { toggleModal } = uiSlice.actions;

export const selectIsModalVisible = (state: RootState) =>
  state.ui.showDeleteModal;

export default uiSlice.reducer;
