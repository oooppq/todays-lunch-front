/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailReviewElem } from './detail.style';
import defaultIcon from '../../assets/img/default-icon.svg';
import {
  handleLikeNum,
  handleLongReview,
  rateStarHandler,
  useReviewElem,
} from './detail.helpers';
import Loading from '../../components/Loading';
import DetailReviewFetchModal from './DetailReviewFetchModal';
import DetailReviewDeleteModal from './DetailReviewDeleteModal';
import CroppedImage from '../../components/CroppedImage';

const DetailReviewElement = ({ restaurantId, review }) => {
  const {
    isUpdateReviewModalOpen,
    setIsUpdateReviewModalOpen,
    isDeleteReviewModalOpen,
    setIsDeleteReviewModalOpen,
    updateReview,
    updateReviewStatus,
    deleteReview,
    deleteReviewStatus,
    pushLike,
    isAuthor,
    isLike,
    likeCount,
  } = useReviewElem(restaurantId, review);

  const navigate = useNavigate();
  // if (postIsError || postIsLoading) return null;

  return (
    <DetailReviewElem>
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
      <CroppedImage
        src={review.member.icon || defaultIcon}
        style={{
          height: '34px',
          width: '34px',
          marginRight: '10px',
          borderRadius: '50%',
        }}
      />

      <div className="reviewBody">
        <div className="userName">{review.member.nickname}</div>
        {isAuthor(review.member.id) ? (
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
        ) : null}
        <div className="rating">{rateStarHandler(review.rating)}</div>
        <div className="content">{handleLongReview(review.reviewContent)}</div>
        <div className="likeAndDate">
          <button
            type="button"
            className={`likeBtn ${isLike ? 'liked' : 'unliked'}`}
            onClick={() => {
              pushLike(navigate);
            }}
          >
            <img className="likeImg" alt="" />
            <span className="likeNum">{handleLikeNum(likeCount)}</span>
          </button>
          <div className="date">{review.createdDate}</div>
        </div>
      </div>
    </DetailReviewElem>
  );
};

export default DetailReviewElement;
