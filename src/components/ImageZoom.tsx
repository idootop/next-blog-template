'use client';

import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

export const ImageZoom = () => {
  useEffect(() => {
    mediumZoom('[data-zoomable]');
  }, []);
  return <span />;
};
