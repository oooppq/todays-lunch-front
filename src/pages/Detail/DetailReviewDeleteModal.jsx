/* eslint-disable react/prop-types */
import React from 'react';
import { DetailReviewDeleteModalContainer } from './detail.style';

const DetailReviewDeleteModal = ({ closeModal, deleteReview }) => {
  return (
    <DetailReviewDeleteModalContainer>
      <div className="modalInner">
        <div className="deleteComment">해당 리뷰를 삭제하시겠습니까?</div>
        <div className="btns">
          <button
            type="button"
            className="btn yesBtn"
            onClick={() => {
              deleteReview();
              closeModal();
            }}
          >
            예
          </button>
          <button type="button" className="btn" onClick={closeModal}>
            아니오
          </button>
        </div>
      </div>
    </DetailReviewDeleteModalContainer>
  );
};

export default DetailReviewDeleteModal;
