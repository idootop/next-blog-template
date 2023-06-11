/* eslint-disable @next/next/no-img-element */

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
      <div className="bannerImage" ref={boxRef}>
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
