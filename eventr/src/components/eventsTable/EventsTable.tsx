import { FC } from 'react';
import { TableRow } from './TableRow';
import { TheadRow } from './TheadRow';

export type EventsTableProps = {
  events: any[];
};

export const EventsTable: FC<EventsTableProps> = ({ events }) => {
  return (
    <table>
      <thead>
        <TheadRow />
      </thead>
      <tbody>
        {events?.map((event: any) => (
          <TableRow key={event.id} event={event} />
        ))}
      </tbody>
    </table>
  );
};
