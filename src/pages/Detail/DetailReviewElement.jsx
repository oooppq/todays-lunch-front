/* eslint-disable react/prop-types */
import React from 'react';
import { DetailReviewElem } from './detail.style';
import defaultIcon from '../../assets/img/default-icon.svg';
import { handleLikeNum, rateStarHandler } from './detail.helpers';
import Loading from '../../components/Loading';
import DetailNewReviewModal from './DetailNewReviewModal';
import DetailReviewDeleteModal from './DetailReviewDeleteModal';

const DetailReviewElement = ({ review, useReviewElem }) => {
  const {
    isUpdateReviewModalOpen,
    setIsUpdateReviewModalOpen,
    isDeleteReviewModalOpen,
    setIsDeleteReviewModalOpen,
    updateReview,
    updateReviewStatus,
    deleteReview,
    deleteReviewStatus,
    isLiked,
    pushLike,
  } = useReviewElem(review.id);

  // if (postIsError || postIsLoading) return null;

  return (
    <DetailReviewElem>
      {updateReviewStatus === 'loading' || deleteReviewStatus === 'loading' ? (
        <Loading />
      ) : null}
      {isUpdateReviewModalOpen && (
        <DetailNewReviewModal
          closeModal={() => {
            setIsUpdateReviewModalOpen(false);
          }}
          fetchReview={updateReview}
          reviewData={review}
        />
      )}
      {isDeleteReviewModalOpen && (
        <DetailReviewDeleteModal
          closeModal={() => {
            setIsDeleteReviewModalOpen(false);
          }}
          deleteReview={deleteReview}
        />
      )}
      <img className="profileImg" src={defaultIcon} alt="" />
      <div className="reviewBody">
        <div className="userName">{review.userName}</div>
        <div className="UpdateAndDeleteBtns">
          <button
            type="button"
            className="deleteBtn"
            onClick={() => {
              setIsUpdateReviewModalOpen(true);
            }}
          >
            수정
          </button>
          {' | '}
          <button
            type="button"
            className="updateBtn"
            onClick={() => {
              setIsDeleteReviewModalOpen(true);
            }}
          >
            삭제
          </button>
        </div>
        <div className="rating">{rateStarHandler(review.rating)}</div>
        <div className="content">{review.reviewContent}</div>
        <div className="likeAndDate">
          <button
            type="button"
            className={`likeBtn ${isLiked ? 'liked' : 'unliked'}`}
            onClick={() => {
              pushLike(review.id);
            }}
          >
            <img className="likeImg" alt="" />
            <span className="likeNum">{handleLikeNum(review.likeCount)}</span>
          </button>
          <div className="date">{review.createdDate}</div>
        </div>
      </div>
    </DetailReviewElem>
  );
};

export default DetailReviewElement;
