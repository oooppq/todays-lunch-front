/* eslint-disable react/prop-types */
import React from 'react';

const SearchResult = ({ data, setRestaurantName, setAddress, setLocation }) => {
  return (
    <div>
      {data
        ? data.map((d) => (
            <button
              type="button"
              key={d.id}
              onClick={() => {
                setRestaurantName(d.place_name);
                setAddress(d.address_name);
                setLocation({ longitude: d.x, latitude: d.y });
              }}
            >
              {d.place_name}
            </button>
          ))
        : '검색 결과가 없습니다.'}
    </div>
  );
};

export default SearchResult;
