import { Button, Group, Modal } from '@mantine/core';

import { deleteEvent } from '../../store/event/eventSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectIsModalVisible,
  selectModalData,
} from '../../store/modal/modalSelectors';
import { setModal } from '../../store/modal/modalSlice';

import styles from './deleteModal.module.scss';

export const DeleteModal = () => {
  const opened = useAppSelector(selectIsModalVisible);
  const { name, id } = useAppSelector(selectModalData);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(setModal());
  };

  const onDeleteEvent = () => {
    dispatch(deleteEvent(id));
  };

  return (
    <Modal
      overlayColor="var(--almost-black)"
      overlayBlur={3}
      opened={opened}
      onClose={onToggle}
      title="Delete"
    >
      <div className={styles.content__container}>
        Are you sure you want to delete <strong>{name}</strong>?
      </div>

      <Group position="right" mt="lg">
        <Button variant="light" color="green" onClick={onDeleteEvent}>
          Yes
        </Button>
        <Button variant="light" color="red">
          No
        </Button>
      </Group>
    </Modal>
  );
};
