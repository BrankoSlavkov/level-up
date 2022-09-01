import { RootState } from '..';

export const selectIsModalVisible = (state: RootState) =>
  state.modal.showDeleteModal;

export const selectModalData = (state: RootState) => state.modal.event;
