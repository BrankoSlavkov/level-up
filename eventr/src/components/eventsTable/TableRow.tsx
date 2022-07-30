import { FC } from 'react';
import { Link } from 'react-router-dom';

export type TableRowProps = {
  event: any;
};

export const TableRow: FC<TableRowProps> = ({
  event: { name, date, description, id },
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>
        <Link to={`edit/${id}`}>Edit</Link>
        <button type="button">Delete</button>
      </td>
    </tr>
  );
};
