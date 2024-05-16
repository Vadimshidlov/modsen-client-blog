'use client';

import { useCallback, useState } from 'react';
import { ScrollMarker } from '@/widgets/ScrollMarker/ui/ScrollMarker';
import { HOME_PAGE_COMPONENTS } from '@/shared/constants/homePageComponents';

export default function Home() {
  const [visibleComponents, setVisibleComponents] = useState([...HOME_PAGE_COMPONENTS.slice(0, 2)]);

  const handleLoadMore = useCallback(() => {
    setVisibleComponents((prevComponents) => {
      const listLength = prevComponents.length;
      const newData = HOME_PAGE_COMPONENTS.slice(listLength, listLength + 1);

      return [...prevComponents, ...newData];
    });
  }, []);

  const isStopLoading = visibleComponents.length === HOME_PAGE_COMPONENTS.length;

  return (
    <main>
      {visibleComponents.map(({ id, element: Component }) => (
        <Component key={id} />
      ))}
      <ScrollMarker loadMore={handleLoadMore} isStopLoading={isStopLoading} />
    </main>
  );
}
