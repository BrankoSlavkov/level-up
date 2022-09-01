import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEvents } from './eventAction';

import { Event } from './eventTypes';

export type EventSlice = {
  events: Event[];
};

const initialState: EventSlice = {
  events: [],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvents: (state, { payload }: PayloadAction<Event[]>) => {
      state.events = payload;
    },
    deleteEvent: (state, { payload }: PayloadAction<string>) => {
      state.events = state.events.filter((event) => event.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchEvents.pending, (state, action) => {})
      .addCase(
        fetchEvents.fulfilled,
        (state, { payload }: PayloadAction<Event[]>) => {
          console.log(payload);
          console.log('here');
          state.events = payload;
        },
      );
    // .addCase(fetchEvents.rejected, (state, action) => {});
  },
});

export const { deleteEvent, setEvents } = eventSlice.actions;

export default eventSlice.reducer;
