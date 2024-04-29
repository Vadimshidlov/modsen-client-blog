'use client';

import { useEffect } from 'react';

export const useBodyScroll = (isModalOpen: boolean) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);
};
