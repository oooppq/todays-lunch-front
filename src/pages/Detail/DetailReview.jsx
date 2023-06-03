/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReview } from './detail.helpers';
import { DetailReviewContainer } from './detail.style';
import DetailReviewElement from './DetailReviewElement';
import defaultIcon from '../../assets/img/default-icon.svg';
import DetailReviewFetchModal from './DetailReviewFetchModal';
import { flattenPages } from '../../libs/utils';
import { useInfiniteScroll } from '../../libs/common.helpers';
import Loading from '../../components/Loading';

const DetailReview = ({ restaurantId }) => {
  const {
    isNewReviewModalOpen,
    setIsNewReviewModalOpen,
    openNewReviewModal,
    reviewList,
    // reviewListIsFetching,
    // reviewListError,
    fetchNextPage,
    pushNewReview,
    pushNewReviewStatus,
    useReviewElem,
  } = useReview(restaurantId);
  const navigate = useNavigate();

  const { ObserverDiv } = useInfiniteScroll(reviewList, fetchNextPage);

  // if (reviewListIsFetching || reviewListError) return null;

  return (
    <DetailReviewContainer>
      {isNewReviewModalOpen && (
        <DetailReviewFetchModal
          closeModal={() => {
            setIsNewReviewModalOpen(false);
          }}
          fetchReview={pushNewReview}
        />
      )}
      {pushNewReviewStatus === 'loading' ? <Loading /> : null}
      <div className="reviewTitle">
        📌 가게 리뷰
        <span>({reviewList && reviewList.pages[0].totalReviewCount})</span>
      </div>
      <div className="newReview">
        <img className="myProfileImg" src={defaultIcon} alt="" />
        <button
          className="newReviewBtn"
          type="button"
          onClick={() => {
            openNewReviewModal(navigate);
          }}
        >
          댓글 추가..
        </button>
      </div>
      <ul className="reviews">
        {reviewList ? (
          <>
            {flattenPages(reviewList.pages).map((review) => (
              <DetailReviewElement
                key={review.id}
                review={review}
                useReviewElem={useReviewElem}
              />
            ))}
            {ObserverDiv}
          </>
        ) : null}
      </ul>
    </DetailReviewContainer>
  );
};

export default DetailReview;
