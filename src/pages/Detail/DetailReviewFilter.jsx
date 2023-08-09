/* eslint-disable react/prop-types */
import React from 'react';

const DetailReviewFilter = ({ sort, setSort, order, setOrder }) => {
  return (
    <div className="reviewFilters">
      <button
        type="button"
        className={`filterBtn ${sort === 'likeCount' ? 'selected' : ''}`}
        onClick={() => {
          setSort('likeCount');
        }}
      >
        좋아요순
      </button>
      <button
        type="button"
        className={`filterBtn ${sort === 'createdDate' ? 'selected' : ''}`}
        onClick={() => {
          setSort('createdDate');
        }}
      >
        최신순
      </button>
      <button
        type="button"
        className={`filterBtn ${sort === 'rating' ? 'selected' : ''}`}
        onClick={() => {
          setSort('rating');
        }}
      >
        별점순
      </button>
      <button
        type="button"
        className="filterBtn ascDesc"
        onClick={() => {
          setOrder((state) => {
            if (state === 'descending') return 'ascending';
            return 'descending';
          });
        }}
      >
        <span className={order === 'descending' ? 'selected' : ''}>
          내림차순
        </span>{' '}
        |{' '}
        <span className={order === 'ascending' ? 'selected' : ''}>
          오름차순
        </span>
      </button>
    </div>
  );
};

export default DetailReviewFilter;
