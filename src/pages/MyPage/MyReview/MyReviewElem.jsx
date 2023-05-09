/* eslint-disable react/prop-types */
import React from 'react';
import { MyReviewLi } from './myReview.style';
import likeIcon from '../../../assets/img/review-like-icon.svg';

const MyReviewElem = ({ review }) => {
  return (
    <MyReviewLi>
      <img src={review.imageUrl} alt="" className="restaurantImg" />
      <div className="restaurantInfo">
        <div className="restaurantName">{review.restaurantName}</div>
        <div className="">{review.rating}</div>
        <div className="">{review.reviewContent}</div>
        <div className="likeBtnAndDate">
          <button type="button" className="likeBtn">
            <img className="likeImg" src={likeIcon} alt="" />
            <span className="likeNum">{review.reviewCount}</span>
          </button>
          <div className="date">{review.createdDate}</div>
        </div>
      </div>
    </MyReviewLi>
  );
};

export default MyReviewElem;
