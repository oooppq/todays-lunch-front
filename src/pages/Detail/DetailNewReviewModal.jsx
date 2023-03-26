/* eslint-disable react/prop-types */
import React from 'react';
import { DetailReviewModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import defaultIcon from '../../assets/img/default-icon.svg';
import {
  useReviewContentHandler,
  useReviewRatingHandler,
  useWarningHandler,
} from './detail.helpers';
import Warning from '../../components/Warning';
import DetailNewReviewRate from './DetailNewReviewRate';

const DetailNewReviewModal = ({ closeNewReviewModal, pushNewReview }) => {
  const { content, changeContent } = useReviewContentHandler();
  const { isWarning, showWarningMessage } = useWarningHandler();
  const { rating, changeRating } = useReviewRatingHandler();

  return (
    <DetailReviewModalContainer>
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={() => closeNewReviewModal()}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="newReviewTitle">리뷰 추가하기</div>
        <div className="newReviewInfo">
          <img src={defaultIcon} alt="" className="infoImg" />
          <div className="infoText">
            맛집에 방문할 사람들을 위해 리뷰와 별점을 남겨주세요.
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
            onChange={(e) => changeContent(e.target.value)}
          />
        </div>

        <div className="warning">
          {isWarning && !content ? <Warning element="리뷰를" /> : null}
        </div>

        <div className="newReviewRate">
          <div className="newReviewRateTitle">별점</div>
          <DetailNewReviewRate rating={rating} changeRating={changeRating} />
          <div className="warning">
            {isWarning && !rating ? <Warning element="별점을" /> : null}
          </div>
        </div>
        <button
          className="newReviewSubmitBtn"
          type="button"
          onClick={() => {
            if (!content || !rating) showWarningMessage();
            else {
              pushNewReview({
                rating,
                reviewContent: content,
              });
              closeNewReviewModal();
            }
          }}
        >
          추가하기
        </button>
      </div>
    </DetailReviewModalContainer>
  );
};

export default DetailNewReviewModal;
