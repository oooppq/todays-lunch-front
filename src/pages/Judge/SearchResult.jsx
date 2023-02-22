/* eslint-disable react/prop-types */
import React from 'react';

const SearchResult = ({ data }) => {
  return (
    <div>{data ? data.map((d) => d.place_name) : '검색 결과가 없습니다.'}</div>
  );
};

export default SearchResult;
