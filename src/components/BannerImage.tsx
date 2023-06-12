'use client';

import { useBoxSize } from '@/core/hooks/useBoxSize';

import { BaseImage } from './BaseImage';

export const BannerImage = (props: { src: string; alt?: string }) => {
  const { src, alt } = props;
  const { boxRef, height } = useBoxSize();

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="banner-image" ref={boxRef}>
        <BaseImage src={src} alt={alt} />
      </div>
      <div
        style={{
          height,
        }}
      />
    </div>
  );
};
