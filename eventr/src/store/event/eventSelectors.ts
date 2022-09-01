import { RootState } from '..';

export const getAllEvents = (state: RootState) => state.event.events;
