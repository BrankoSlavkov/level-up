import { memo } from 'react';

import { TableRow } from './TableRow';
import { TheadRow } from './TheadRow';

import styles from './eventsTable.module.scss';
import { DeleteModal } from '../modal/DeleteModal';

export type EventsTableProps = {
  events: any[];
};

export const EventsTable = memo<EventsTableProps>(({ events }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <TheadRow />
        </thead>
        <tbody>
          {events?.map((event: any) => (
            <TableRow key={event.id} event={event} />
          ))}
        </tbody>
      </table>
      <DeleteModal />
    </>
  );
});

EventsTable.displayName = 'EventsTable';
