'use client';

import React, { useEffect, useRef } from 'react';

export function ScrollMarker({
  isStopLoading,
  loadMore,
}: {
  isStopLoading: boolean;
  loadMore: () => void;
}) {
  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const isSentinelIntersecting = entries[0].isIntersecting;

        if (isSentinelIntersecting && !isStopLoading) {
          console.log('observer call');
          loadMore();
        }
      },
      { threshold: 0.5 },
    );

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      if (observer.current && sentinelRef.current) {
        observer.current.unobserve(sentinelRef.current);
        observer.current.disconnect();
      }
    };
  }, [loadMore, isStopLoading]);

  return <div ref={sentinelRef} style={{ height: '10px' }} />;
}
