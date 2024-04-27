'use client';

import React, { useEffect, useRef } from 'react';
import styles from '@/widgets/ContactsSection/ui/Map/Map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {
  initialUserLat,
  initialUserLng,
  MAP_MARKERS,
  MAP_ZOOM,
  MAPBOXGL_STYLES_LINK,
} from '@/widgets/ContactsSection/constants/map';

export function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    let map: mapboxgl.Map;

    if (mapRef.current) {
      map = new mapboxgl.Map({
        accessToken: process.env.NEXT_PUBLIC_MAPBOXGL_TOKEN,
        container: mapRef.current,
        style: MAPBOXGL_STYLES_LINK,
        center: [initialUserLng, initialUserLat],
        zoom: MAP_ZOOM,
      });

      MAP_MARKERS.forEach(({ address, lng, lat }) => {
        const popup = new mapboxgl.Popup({
          offset: 35,
        }).setHTML(`<h2><strong>Office</strong></h2><p>Address: ${address}</p>`);
        new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(map);
      });
    }

    return () => map.remove();
  }, []);

  return <div className={styles.mapContainer} ref={mapRef} />;
}
