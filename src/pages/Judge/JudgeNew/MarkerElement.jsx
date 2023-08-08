/* eslint-disable react/prop-types */
import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { pushRecentSearch } from '../../../libs/utils';
import smallMarker from '../../../assets/img/small-marker-icon.png';
import clickedMarker from '../../../assets/img/default-marker-icon.png';

const MarkerElement = ({ data, isClicked, setSelected }) => {
  if (!isClicked && data.place_name.length <= 0) return null;
  return (
    <MapMarker
      position={{ lat: Number(data.y), lng: Number(data.x) }}
      clickable
      onClick={() => {
        setSelected({ ...data, y: Number(data.y), x: Number(data.x) });
        if (data.place_name.length > 0)
          pushRecentSearch('recentSearch/judge', data.place_name, 1, data);
      }}
      image={
        isClicked
          ? {
              src: clickedMarker,
              size: {
                width: 22,
                height: 30,
              },
            }
          : {
              src: smallMarker,
              size: {
                width: 12,
                height: 18,
              },
            }
      }
    />
  );
};

export default MarkerElement;
