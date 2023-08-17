/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { DetailReviewModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import defaultIcon from '../../assets/img/default-icon.svg';
import { useFetchReview } from './detail.helpers';
import Warning from '../../components/Warning';
import DetailNewReviewRate from './DetailNewReviewRate';

const DetailReviewFetchModal = ({ closeModal, fetchReview, reviewData }) => {
  const {
    content,
    setContent,
    rating,
    setRating,
    isWarning,
    handleFetchReview,
  } = useFetchReview();

  useEffect(() => {
    if (reviewData) {
      setContent(reviewData.reviewContent);
      setRating(reviewData.rating);
    }
  }, [reviewData, setContent, setRating]);

  return (
    <DetailReviewModalContainer>
      <div className="modalInner">
        <button className="closeBtn" type="button" onClick={closeModal}>
          <img src={xIcon} alt="" />
        </button>
        <div className="newReviewTitle">
          리뷰 {reviewData ? '수정' : '추가'}하기
        </div>
        <div className="newReviewInfo">
          <img src={defaultIcon} alt="" className="infoImg" />
          <div className="infoText">
            {reviewData
              ? '리뷰를 수정하고 확인버튼을 눌러주세요.'
              : '맛집에 방문할 사람들을 위해 리뷰와 별점을 남겨주세요.'}
          </div>
        </div>
        <div className="newReviewBody">
          <div className="newReviewBodyTitle">리뷰</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="newReviewContent"
            placeholder="리뷰 추가.."
            maxLength={300}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            defaultValue={content}
          />
        </div>

        <div className="warning">
          {isWarning && !content ? <Warning element="리뷰를" /> : null}
        </div>

        <div className="newReviewRate">
          <div className="newReviewRateTitle">별점</div>
          <DetailNewReviewRate rating={rating} changeRating={setRating} />
          <div className="warning">
            {isWarning && !rating ? <Warning element="별점을" /> : null}
          </div>
        </div>
        <button
          className="newReviewSubmitBtn"
          type="button"
          onClick={() => {
            handleFetchReview(fetchReview);
          }}
        >
          확인
        </button>
      </div>
    </DetailReviewModalContainer>
  );
};

export default DetailReviewFetchModal;
