import React from 'react';
import {
  MyReviewContainer,
  MyReviewHeader,
  MyReviewUl,
} from './myReview.style';
import MyReviewElem from './MyReviewElem';
import UserPageHeader from '../../../components/UserPageHeader';

const reviews = {
  data: [
    {
      reviewId: 1,
      restId: 1,
      restaurantName: '가츠벤또',
      imageUrl: '',
      rating: 5,
      reviewContent: '모든 서강대생이 인정한 극강의 맛집',
      createdDate: '2023-03-24',
      likeCount: 100,
    },
    {
      reviewId: 2,
      restId: 2,
      restaurantName: '마포돼지불백',
      imageUrl: '',
      rating: 4,
      reviewContent:
        '마돼불마돼볼무러암노엄넝ㅁㄴ오머ㅏ엄낭ㄴ어ㅘ모어마오ㅓ마마돼불마돼볼무러암노엄넝ㅁㄴ오머ㅏ엄낭ㄴ어ㅘ모어마오ㅓ마',
      createdDate: '2023-03-24',
      likeCount: 2323,
    },
  ],
  totalPages: 1,
};

const MyReview = () => {
  return (
    <MyReviewContainer>
      <UserPageHeader>
        <div className="pageTitle">내가 쓴 리뷰</div>
      </UserPageHeader>
      <MyReviewHeader>
        <div className="title">
          📌 <span className="bold">알바트로스님</span>이 작성한 리뷰 리스트
        </div>
      </MyReviewHeader>
      <MyReviewUl>
        {reviews.data.map((review) => (
          <MyReviewElem key={review.reviewId} review={review} />
        ))}
      </MyReviewUl>
    </MyReviewContainer>
  );
};

export default MyReview;
