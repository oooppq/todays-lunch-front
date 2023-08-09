import React from 'react';
import {
  MyReviewContainer,
  MyReviewHeader,
  MyReviewUl,
} from './myReview.style';
import MyReviewElem from './MyReviewElem';
import UserPageHeader from '../../../components/UserPageHeader';
import { useMyPage, useMyReview } from '../myPage.helpers';
import { useInfiniteScroll } from '../../../libs/common.helpers';
import { flattenPages } from '../../../libs/utils';

const MyReview = () => {
  const { userInfo, userInfoIsFetching, userInfoError } = useMyPage();
  const {
    myReviews,
    // myReviewError,
    // myReviewIsFetching,
    // hasNextPage,
    fetchNextPage,
  } = useMyReview();
  const { observerRef } = useInfiniteScroll(myReviews, fetchNextPage);

  return (
    <MyReviewContainer>
      <UserPageHeader>
        <div className="pageTitle">내가 쓴 리뷰</div>
      </UserPageHeader>
      <MyReviewHeader>
        <div className="title">
          📌{' '}
          <span className="userName">
            {userInfoIsFetching || userInfoError ? null : userInfo.nickname}
          </span>
          님이 작성한 리뷰 리스트
        </div>
      </MyReviewHeader>
      <MyReviewUl>
        {myReviews ? (
          <>
            {flattenPages(myReviews.pages).map((review) => (
              <MyReviewElem key={review.reviewId} review={review} />
            ))}
            <div ref={observerRef} className="observer" />
          </>
        ) : null}
      </MyReviewUl>
    </MyReviewContainer>
  );
};

export default MyReview;
