/* eslint-disable @next/next/no-img-element */
import React from 'react';
import uniqid from 'uniqid';

type RowProps = {
  imageProps: { height: number; width: number };
  imageURLx: string[];
};
function Row({ imageProps, imageURLx }: RowProps) {
  return (
    <div className='flex w-screen overflow-hidden'>
      {imageURLx.map((url) => (
        <img className='h-' key={uniqid()} src={url} alt='image' />
      ))}
    </div>
  );
}

export default Row;
