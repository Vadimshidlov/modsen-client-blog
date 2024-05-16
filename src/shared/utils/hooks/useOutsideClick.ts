'use client';

import { useEffect, useRef } from 'react';

export const useOutsideClick = (
  modalRef: React.RefObject<HTMLDivElement | HTMLUListElement>,
  isOpen: boolean,
  handleCloseModal: () => void,
) => {
  const handleCloseModalRef = useRef(handleCloseModal);

  useEffect(() => {
    handleCloseModalRef.current = handleCloseModal;
  }, [handleCloseModal]);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseModalRef.current();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen, modalRef]);
};
