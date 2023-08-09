/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MyReviewLi } from './myReview.style';
import {
  handleLikeNum,
  // handleLongReview,
  rateStarHandler,
  useReviewElem,
} from '../../Detail/detail.helpers';
import Loading from '../../../components/Loading';
import DetailReviewDeleteModal from '../../Detail/DetailReviewDeleteModal';
import DetailReviewFetchModal from '../../Detail/DetailReviewFetchModal';

const MyReviewElem = ({ review }) => {
  const navigate = useNavigate();
  const {
    isUpdateReviewModalOpen,
    setIsUpdateReviewModalOpen,
    isDeleteReviewModalOpen,
    setIsDeleteReviewModalOpen,
    updateReview,
    updateReviewStatus,
    deleteReview,
    deleteReviewStatus,
  } = useReviewElem(review.restaurantId, review);

  return (
    <>
      {updateReviewStatus === 'loading' || deleteReviewStatus === 'loading' ? (
        <Loading />
      ) : null}
      {isUpdateReviewModalOpen && (
        <DetailReviewFetchModal
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
      <MyReviewLi
        onClick={() => {
          navigate(`/restaurants/${review.restaurantId}`);
        }}
      >
        <img src={review.imageUrl} alt="" className="restaurantImg" />
        <div className="restaurantInfo">
          <div className="restaurantName">{review.restaurantName}</div>
          <div className="UpdateAndDeleteBtns">
            <button
              type="button"
              className="deleteBtn"
              onClick={(e) => {
                setIsUpdateReviewModalOpen(true);
                e.stopPropagation();
              }}
            >
              수정
            </button>
            {' | '}
            <button
              type="button"
              className="updateBtn"
              onClick={(e) => {
                setIsDeleteReviewModalOpen(true);
                e.stopPropagation();
              }}
            >
              삭제
            </button>
          </div>
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
    </>
  );
};

export default MyReviewElem;
