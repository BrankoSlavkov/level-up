import { createAsyncThunk } from '@reduxjs/toolkit';

import { events } from '../../api';
import { Event } from './eventTypes';

export const fetchEvents = createAsyncThunk<Event[], void>(
  'event/fetchEvents',
  async (_, { rejectWithValue }) => {
    const { data, statusText } = await events.get('/events');

    if (!statusText.match(/ok/i)) {
      return rejectWithValue(data);
    }
    return data;
  },
);

export const deleteEvent = createAsyncThunk<string, string>(
  'event/deleteEvent',
  async (id, { rejectWithValue }) => {
    const { data, statusText } = await events.delete(`/events/${id}`);

    if (!statusText.match(/ok/i)) {
      return rejectWithValue(data);
    }

    return id;
  },
);
