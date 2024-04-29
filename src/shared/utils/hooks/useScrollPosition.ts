'use client';

import { useEffect, useRef } from 'react';

export const useScrollPosition = (observeElement: number | string[]) => {
  const offsetRef = useRef(0);

  useEffect(() => {
    if (offsetRef.current !== 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight - (offsetRef.current + window.innerHeight),
        behavior: 'instant',
      });
    }
  }, [observeElement]);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const currentScrollPosition = window.scrollY;
      const offsetFromBottom = documentHeight - (currentScrollPosition + windowHeight);
      offsetRef.current = offsetFromBottom;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
