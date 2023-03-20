/* eslint-disable react/prop-types */
import React from 'react';
import { useReview } from './detail.helpers';
import { DetailReviewContainer } from './detail.style';
import DetailReviewElement from './DetailReviewElement';
import defaultIcon from '../../assets/img/default-icon.svg';

const DetailReview = ({ restaurantId }) => {
  const { data, isLoading, isError } = useReview(restaurantId);

  if (isLoading || isError) return null;

  return (
    <DetailReviewContainer>
      <div className="reviewTitle">
        📌 가게 리뷰<span>({data.data.length})</span>
      </div>
      <div className="newReview">
        <img className="myProfileImg" src={defaultIcon} alt="" />
        <button className="newReviewBtn" type="button">
          댓글 추가..
        </button>
      </div>
      <ul className="reviews">
        {data.data.map((review) => (
          <DetailReviewElement key={review.id} review={review} />
        ))}
      </ul>
    </DetailReviewContainer>
  );
};

export default DetailReview;
