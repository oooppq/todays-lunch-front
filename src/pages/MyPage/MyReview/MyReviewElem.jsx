/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MyReviewLi } from './myReview.style';
import {
  handleLikeNum,
  // handleLongReview,
  rateStarHandler,
} from '../../Detail/detail.helpers';

const MyReviewElem = ({ review }) => {
  const navigate = useNavigate();

  return (
    <MyReviewLi
      onClick={() => {
        navigate(`/restaurants/${review.restaurantId}`);
      }}
    >
      <img src={review.imageUrl} alt="" className="restaurantImg" />
      <div className="restaurantInfo">
        <div className="restaurantName">{review.restaurantName}</div>
        <div className="rating">{rateStarHandler(review.rating)}</div>
        <div className="content">{review.reviewContent}</div>
        <div className="likeBtnAndDate">
          <button
            type="button"
            className={`likeBtn ${false ? 'liked' : 'unliked'}`}
          >
            <img className="likeImg" alt="" />
            <span className="likeNum">{handleLikeNum(review.likeCount)}</span>
          </button>
          <div className="date">{review.createdDate}</div>
        </div>
      </div>
    </MyReviewLi>
  );
};

export default MyReviewElem;
