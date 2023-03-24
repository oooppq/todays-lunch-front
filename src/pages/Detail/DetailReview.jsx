/* eslint-disable react/prop-types */
import React from 'react';
import { useReviewRest } from './detail.helpers';
import { DetailReviewContainer } from './detail.style';
import DetailReviewElement from './DetailReviewElement';
import defaultIcon from '../../assets/img/default-icon.svg';
import { useNewReviewModal } from './detail.states';
import DetailNewReviewModal from './DetailNewReviewModal';

const DetailReview = ({ restaurantId }) => {
  const { get, post, patch, del } = useReviewRest(restaurantId);
  const { data, isLoading, isError } = get();
  const { isNewReview, openNewReviewModal, closeNewReviewModal } =
    useNewReviewModal();

  if (isLoading || isError) return null;

  return (
    <DetailReviewContainer>
      {isNewReview && (
        <DetailNewReviewModal
          closeNewReviewModal={closeNewReviewModal}
          post={post}
        />
      )}
      <div className="reviewTitle">
        📌 가게 리뷰<span>({data.data.length})</span>
      </div>
      <div className="newReview">
        <img className="myProfileImg" src={defaultIcon} alt="" />
        <button
          className="newReviewBtn"
          type="button"
          onClick={() => openNewReviewModal()}
        >
          댓글 추가..
        </button>
      </div>
      <ul className="reviews">
        {data.data.map((review) => (
          <DetailReviewElement
            key={review.id}
            review={review}
            patch={patch}
            del={del}
          />
        ))}
      </ul>
    </DetailReviewContainer>
  );
};

export default DetailReview;
