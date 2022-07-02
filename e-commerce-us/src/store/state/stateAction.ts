import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchData } from '../../api/fetchDate';
import { STATES_URL } from '../../api/urls';

export const fetchStates = createAsyncThunk('state/fetchStates', async () => {
  return await fetchData(STATES_URL);
});
