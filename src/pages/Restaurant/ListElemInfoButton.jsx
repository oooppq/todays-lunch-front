/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsMap,
  setMapCenter,
  setMapLevel,
  setSelectedMarker,
} from '../../redux/map';

const ListElemInfoButton = ({ restaurant }) => {
  const dispatch = useDispatch();

  return (
    <div className="btnContainer">
      <button
        type="button"
        onClick={(event) => {
          dispatch(setSelectedMarker(restaurant.id));
          dispatch(setIsMap(true));
          dispatch(
            setMapCenter({
              lat: restaurant.latitude,
              lng: restaurant.longitude,
            })
          );
          dispatch(setMapLevel(4));
          event.stopPropagation();
        }}
      >
        지도 위치 보기
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <a
          href={`https://map.kakao.com/link/to/${restaurant.restaurantName},${restaurant.longitude},${restaurant.latitude}`}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </button>
    </div>
  );
};

export default ListElemInfoButton;
