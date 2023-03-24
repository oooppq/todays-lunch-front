/* eslint-disable react/prop-types */
import React from 'react';
import { useReview } from './detail.helpers';
import { DetailReviewContainer } from './detail.style';
import DetailReviewElement from './DetailReviewElement';
import defaultIcon from '../../assets/img/default-icon.svg';
import { useNewReviewModal } from './detail.states';
import DetailNewReviewModal from './DetailNewReviewModal';

const DetailReview = ({ restaurantId }) => {
  const {
    getReviewList,
    pushNewReview,
    updateReview,
    deleteReview,
    getIsLike,
    pushLike,
  } = useReview(restaurantId);
  const { data, isLoading, isError } = getReviewList();
  const { isNewReview, openNewReviewModal, closeNewReviewModal } =
    useNewReviewModal();

  if (isLoading || isError) return null;

  return (
    <DetailReviewContainer>
      {isNewReview && (
        <DetailNewReviewModal
          closeNewReviewModal={closeNewReviewModal}
          pushNewReview={pushNewReview}
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
            updateReview={updateReview}
            deleteReview={deleteReview}
            getIsLike={getIsLike}
            pushLike={pushLike}
          />
        ))}
      </ul>
    </DetailReviewContainer>
  );
};

export default DetailReview;
