/* eslint-disable react/prop-types */
import React from 'react';

const SearchResult = ({ data, setLocation }) => {
  return (
    <div>
      {data
        ? data.map((d) => (
            <button
              type="button"
              key={d.id}
              onClick={() => {
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
