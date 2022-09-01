import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setModal } from '../../store/modal/modalSlice';

import styles from './eventsTable.module.scss';

export type TableRowProps = {
  event: any;
};

export const TableRow: FC<TableRowProps> = ({ event }) => {
  const { name, date, description, id } = event;
  const dispatch = useAppDispatch();

  return (
    <tr>
      <td>{name}</td>
      <td>{new Date(date).toDateString()}</td>
      <td>{description}</td>
      <td className={styles.actions}>
        <Link to={`edit/${id}`}>Edit</Link>
        <button type="button" onClick={() => dispatch(setModal(event))}>
          Delete
        </button>
      </td>
    </tr>
  );
};
