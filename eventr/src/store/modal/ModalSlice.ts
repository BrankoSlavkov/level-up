import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { deleteEvent } from '../event/eventSlice';
import { Event } from '../event/eventTypes';

type ModalSlice = {
  showDeleteModal: boolean;
  event: Event;
};

const emptyEvent = {} as Event;

const initialState: ModalSlice = {
  showDeleteModal: false,
  event: emptyEvent,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, { payload }: PayloadAction<Event | undefined>) => {
      state.showDeleteModal = !state.showDeleteModal;
      state.event = payload ?? emptyEvent;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteEvent, (state) => {
      state.event = emptyEvent;
      state.showDeleteModal = false;
    });
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
