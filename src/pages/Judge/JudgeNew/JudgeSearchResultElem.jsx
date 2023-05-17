/* eslint-disable react/prop-types */
import React from 'react';

const JudgeSearchResultElem = ({
  restaurant,
  setMode,
  pushRecentSearch,
  setSelected,
}) => {
  return (
    <li
      type="button"
      onClick={() => {
        setMode('map');
        pushRecentSearch(
          'recentSearch/judge',
          restaurant.place_name,
          1,
          restaurant
        );
        setSelected(restaurant);
      }}
      aria-hidden="true" // eslint rule
    >
      <div className="placeName">{restaurant.place_name}</div>
      <div className="address">{restaurant.address_name}</div>
      <button
        type="button"
        className="detail"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <a href={restaurant.place_url} target="_blank" rel="noreferrer">
          상세 정보 보기
        </a>
      </button>
    </li>
  );
};

export default JudgeSearchResultElem;
