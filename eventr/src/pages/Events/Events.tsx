import { useEffect, useState } from 'react';

import { events } from '../../api';
import { EventsTable } from '../../components/eventsTable/EventsTable';

import styles from './events.module.scss';

export const Events = () => {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { statusText, data } = await events.get('/events');

      if (!statusText.match(/ok/i)) {
        return;
      }
      setTemp(data);
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles._container}>
      <EventsTable events={temp} />
    </div>
  );
};
