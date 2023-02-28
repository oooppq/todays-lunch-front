/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setLatitude,
  setRestaurantName,
  setLongitude,
  setAddress,
} from '../../redux/judgeNew';

const JudgeSearchResult = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {data
        ? data.map((d) => (
            <button
              type="button"
              key={d.id}
              onClick={() => {
                dispatch(setRestaurantName(d.place_name));
                dispatch(setAddress(d.address_name));
                dispatch(setLongitude(d.x));
                dispatch(setLatitude(d.y));
              }}
            >
              {d.place_name}
            </button>
          ))
        : '검색 결과가 없습니다.'}
    </div>
  );
};

export default JudgeSearchResult;
