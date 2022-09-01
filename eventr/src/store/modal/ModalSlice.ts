import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../event/eventSlice';

type ModalSlice = {
  showDeleteModal: boolean;
  event: Event;
};

const initialState: ModalSlice = {
  showDeleteModal: false,
  event: {} as Event,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, { payload }: PayloadAction<Event | undefined>) => {
      state.showDeleteModal = !state.showDeleteModal;
      state.event = payload ?? ({} as Event);
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
