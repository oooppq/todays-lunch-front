/* eslint-disable react/prop-types */
import React from 'react';
import { DetailReviewElem } from './detail.style';
import defaultIcon from '../../assets/img/default-icon.svg';
import likeIcon from '../../assets/img/review-like-icon.svg';
import { useRateHanlder } from './detail.helpers';

const DetailReviewElement = ({ review }) => {
  return (
    <DetailReviewElem>
      <img className="profileImg" src={defaultIcon} alt="" />
      <div className="reviewBody">
        <div className="userName">{review.userName}</div>
        <div className="rating">{useRateHanlder(review.rating)}</div>
        <div className="content">{review.reviewContent}</div>
        <div className="likeAndDate">
          <button type="button" className="like">
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
