import { FC, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { useAppDispatch } from '../../store/hooks';
import { fetchStates } from '../../store/state/stateAction';
import { State } from '../../store/state/stateTypes';

type StateSelectProps = {
  register: UseFormRegisterReturn<'stateId'>;
  states: State[];
};

export const StateSelect: FC<StateSelectProps> = ({ register, states }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  return (
    <select {...register}>
      {states?.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};
