import { useEffect } from 'react';

import { EventsTable } from '../../components/eventsTable/EventsTable';
import { fetchEvents } from '../../store/event/eventAction';
import { getAllEvents } from '../../store/event/eventSelectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './events.module.scss';

export const Events = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(getAllEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className={styles._container}>
      <EventsTable events={events} />
    </div>
  );
};
