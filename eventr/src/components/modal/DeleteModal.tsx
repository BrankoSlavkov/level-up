import { Modal } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectIsModalVisible,
  selectModalContent,
  setModal,
} from '../../store/modal/ModalSlice';

import styles from './deleteModal.module.scss';

export const DeleteModal = () => {
  const opened = useAppSelector(selectIsModalVisible);
  const content = useAppSelector(selectModalContent);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(setModal());
  };

  return (
    <Modal
      overlayColor="var(--almost-black)"
      overlayBlur={3}
      opened={opened}
      onClose={toggle}
      title="Delete"
    >
      <div className={styles.content__container}>
        Are you sure you want to delete <strong>{content}</strong>?
      </div>
    </Modal>
  );
};
