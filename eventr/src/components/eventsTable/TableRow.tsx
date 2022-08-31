import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { toggleModal } from '../../store/ui/UiSlice';

import styles from './eventsTable.module.scss';

export type TableRowProps = {
  event: any;
};

export const TableRow: FC<TableRowProps> = ({
  event: { name, date, description, id },
}) => {
  console.log('eeel');
  const dispatch = useAppDispatch();

  const showDeleteModal = () => {
    dispatch(toggleModal());
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{new Date(date).toDateString()}</td>
      <td>{description}</td>
      <td className={styles.actions}>
        <Link to={`edit/${id}`}>Edit</Link>
        <button type="button" onClick={showDeleteModal}>
          Delete
        </button>
      </td>
    </tr>
  );
};
