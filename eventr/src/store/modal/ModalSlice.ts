import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

type ModalSlice = {
  showDeleteModal: boolean;
  content: string;
};

const initialState: ModalSlice = {
  showDeleteModal: false,
  content: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, { payload }: PayloadAction<string | undefined>) => {
      state.showDeleteModal = !state.showDeleteModal;
      state.content = payload ?? '';
    },
  },
});

export const { setModal } = modalSlice.actions;

export const selectIsModalVisible = (state: RootState) =>
  state.modal.showDeleteModal;

export const selectModalContent = (state: RootState) => state.modal.content;

export default modalSlice.reducer;
