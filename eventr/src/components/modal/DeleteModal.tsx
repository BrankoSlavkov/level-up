import { Modal } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectIsModalVisible, toggleModal } from '../../store/ui/UiSlice';

export const DeleteModal = () => {
  const opened = useAppSelector(selectIsModalVisible);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(toggleModal());
  };

  return (
    <Modal
      overlayColor="var(--almost-black)"
      overlayBlur={3}
      opened={opened}
      onClose={toggle}
      title="This is fullscreen modal!"
    >
      <div>delete</div>
    </Modal>
  );
};
