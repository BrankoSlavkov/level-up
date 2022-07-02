import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { Close } from '../../assets/icons/Close';

import styles from './modal.module.css';

const portalRoot = document.getElementById('portal');

type ModalProps = {
  closeHandler: () => void;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, closeHandler }) => {
  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <div className={styles.modal__wrapper}>
        <div className={styles.modal}>
          <div className={styles.close}>
            <button onClick={closeHandler}>
              <Close className={`${styles['h-2']} ${styles['w-2']}`} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>,
    portalRoot,
  );
};
