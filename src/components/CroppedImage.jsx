/* eslint-disable react/prop-types */
import React from 'react';

const CroppedImage = ({ style, src }) => {
  return (
    <div
      style={{
        ...style,
        position: 'relative',
      }}
    >
      <img
        src={src}
        alt=""
        className=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translate(50, 50)',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          margin: 'auto',
        }}
      />
    </div>
  );
};

export default CroppedImage;
