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
import DetailReviewFilter from './DetailReviewFilter';

const DetailReview = ({ restaurantId, reviewNumber }) => {
  const {
    isNewReviewModalOpen,
    setIsNewReviewModalOpen,
    openNewReviewModal,
    sort,
    setSort,
    order,
    setOrder,
    reviewList,
    // reviewListIsFetching,
    // reviewListError,
    fetchNextPage,
    pushNewReview,
    pushNewReviewStatus,
  } = useReview(restaurantId);
  const navigate = useNavigate();

  const { observerRef } = useInfiniteScroll(reviewList, fetchNextPage);

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
        📌 리뷰
        <span>({reviewNumber})</span>
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
      <DetailReviewFilter
        sort={sort}
        order={order}
        setSort={setSort}
        setOrder={setOrder}
      />
      <ul className="reviews">
        {reviewList ? (
          <>
            {flattenPages(reviewList.pages).map((review) => (
              <DetailReviewElement
                key={review.id}
                restaurantId={restaurantId}
                review={review}
              />
            ))}
            <div ref={observerRef} className="observer" />
          </>
        ) : null}
      </ul>
    </DetailReviewContainer>
  );
};

export default DetailReview;
