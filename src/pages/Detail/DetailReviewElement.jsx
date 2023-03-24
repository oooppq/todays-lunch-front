/* eslint-disable react/prop-types */
import React from 'react';
import { DetailReviewElem } from './detail.style';
import defaultIcon from '../../assets/img/default-icon.svg';
import likeIcon from '../../assets/img/review-like-icon.svg';
import { rateStarHanlder } from './detail.helpers';

// const DetailReviewElement = ({ review, patch, del, likeGet, likePost }) => {
const DetailReviewElement = ({ review, likeGet, likePost }) => {
  const { isLiked, isError: getIsError, isLoading: getIsLoading } = likeGet();
  const {
    mutate,
    isError: postIsError,
    isLoading: postIsLoading,
  } = likePost(review.id);

  if (getIsError || getIsLoading || postIsError || postIsLoading) return null;

  return (
    <DetailReviewElem>
      <img className="profileImg" src={defaultIcon} alt="" />
      <div className="reviewBody">
        <div className="userName">{review.userName}</div>
        <div className="rating">{rateStarHanlder(review.rating)}</div>
        <div className="content">{review.reviewContent}</div>
        <div className={`likeAndDate ${isLiked ? 'liked' : null}`}>
          <button
            type="button"
            className="like"
            onClick={() => {
              mutate();
            }}
          >
            <img className="likeImg" src={likeIcon} alt="" />
            <span className="likeNum">{review.likeCount}</span>
          </button>
          <div className="date">{review.createdDate}</div>
        </div>
      </div>
    </DetailReviewElem>
  );
};

export default DetailReviewElement;
