import { useEffect, useState } from 'react';

import { events } from '../../api';

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
    <div>
      {temp?.map((event: any) => (
        <div key={event.id}>{event.name}</div>
      ))}
    </div>
  );
};
