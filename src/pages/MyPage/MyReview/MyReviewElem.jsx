/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MyReviewLi } from './myReview.style';
import likeIcon from '../../../assets/img/review-like-icon.svg';
import { rateStarHandler } from '../../Detail/detail.helpers';
import { handleLongReview } from '../myPage.helpers';

const MyReviewElem = ({ review }) => {
  const navigate = useNavigate();

  return (
    <MyReviewLi
      onClick={() => {
        navigate(`/restaurants/${review.restId}`);
      }}
    >
      <img src={review.imageUrl} alt="" className="restaurantImg" />
      <div className="restaurantInfo">
        <div className="restaurantName">{review.restaurantName}</div>
        <div className="rating">{rateStarHandler(review.rating)}</div>
        <div className="content">{handleLongReview(review.reviewContent)}</div>
        <div className="likeBtnAndDate">
          <button type="button" className="likeBtn">
            <img className="likeImg" src={likeIcon} alt="" />
            <span className="likeNum">{review.likeCount}</span>
          </button>
          <div className="date">{review.createdDate}</div>
        </div>
      </div>
    </MyReviewLi>
  );
};

export default MyReviewElem;
