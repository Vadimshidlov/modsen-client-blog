import React, { ReactNode, useCallback, useRef } from 'react';
import Image from 'next/image';
import styles from '@/shared/ui/ModalWindow/ModalWindow.module.scss';
import { useBodyScroll } from '@/shared/utils/hooks/useBodyScroll';
import { useOutsideClick } from '@/shared/utils/hooks/useOutsideClick';
import closeIconSrc from '@/widgets/Header/assets/close-button-svgrepo-com.svg';

export type ModalWindowPropsType = {
  isOpen: boolean;
  handleToggleModal: () => void;
  children: ReactNode;
};

export function ModalWindow({ isOpen, handleToggleModal, children }: ModalWindowPropsType) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = useCallback(() => {
    handleToggleModal();
  }, [handleToggleModal]);

  useOutsideClick(modalRef, isOpen, handleCloseModal);
  useBodyScroll(isOpen);

  if (!isOpen) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        {children}
        <button className={styles.modalCloseButton} onClick={handleCloseModal}>
          <Image
            className={styles.modalCloseIcon}
            src={closeIconSrc}
            alt="close-Icon"
            data-testid="modal-video-close-button"
          />
        </button>
      </div>
    </div>
  );
}
