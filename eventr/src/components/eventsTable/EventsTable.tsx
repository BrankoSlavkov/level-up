import { TableRow } from './TableRow';
import { TheadRow } from './TheadRow';

import styles from './eventsTable.module.scss';
import { DeleteModal } from '../modal/DeleteModal';

export type EventsTableProps = {
  events: any[];
};

export const EventsTable: React.FC<EventsTableProps> = ({ events }) => {
  console.log('eel');
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
};
