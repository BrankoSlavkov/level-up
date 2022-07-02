import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { State } from '../../store/state/stateTypes';

import styles from '../categorySelect/select.module.css';

type StateSelectProps = {
  register: UseFormRegisterReturn<'stateId'>;
  states: State[];
};

export const StateSelect: FC<StateSelectProps> = ({ register, states }) => {
  return (
    <select {...register} className={styles.select}>
      {states?.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};
