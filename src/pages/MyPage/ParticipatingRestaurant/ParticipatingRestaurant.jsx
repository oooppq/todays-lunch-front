import React from 'react';
import UserPageHeader from '../../../components/UserPageHeader';
import {
  ParticipatingRestaurantContainer,
  ParticipatingRestaurantHeader,
  ParticipatingRestaurantUl,
} from './participatingRestaurant.style';
import smileIcon from '../../../assets/img/smile-icon.svg';
import { useMyPage, useParticipatingRestaurant } from '../myPage.helpers';
import ParticipatingRestaurantElem from './ParticipatingRestaurantElem';
import { flattenPages } from '../../../libs/utils';

const ParticipatingRestaurant = () => {
  const { userInfo, userInfoIsFetching, userInfoError } = useMyPage();
  const {
    addedRestaurants,
    // arIsFetching,
    // arError,
    // arHasNextPage,
    arFetchNextPage,
    contributingRestaurants,
    // crIsFetching,
    // crError,
    // crHasNextPage,
    crFetchNextPage,
  } = useParticipatingRestaurant();

  return (
    <ParticipatingRestaurantContainer>
      <UserPageHeader>
        <div className="pageTitle">참여한 맛집</div>
      </UserPageHeader>
      <ParticipatingRestaurantHeader>
        <div className="explanation">
          <img src={smileIcon} alt="" className="smileIcon" />
          <div className="explanationText">
            <span className="bold">
              {userInfoIsFetching || userInfoError ? null : userInfo.nickname}님
            </span>
            이 참여한 맛집들이에요.
            <br />총{' '}
            <span className="bold number">
              {userInfoIsFetching || userInfoError
                ? null
                : userInfo.contributionCount}
              개
            </span>
            의 맛집을 직접 추가했고,
            <br />총{' '}
            <span className="bold number">
              {userInfoIsFetching || userInfoError
                ? null
                : userInfo.infoChangeCount}
              개
            </span>
            의 맛집의 정보에 기여헸어요 🙂
          </div>
        </div>
      </ParticipatingRestaurantHeader>
      <div className="subTitle">
        📌{' '}
        <span className="userName">
          {userInfoIsFetching || userInfoError ? null : userInfo.nickname}님
        </span>
        이 직접 추가한 맛집 리스트
      </div>
      <ParticipatingRestaurantUl>
        {addedRestaurants
          ? flattenPages(addedRestaurants.pages).map((restaurant) => (
              <ParticipatingRestaurantElem
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          : null}
        <button type="button" className="moreBtn" onClick={arFetchNextPage}>
          더보기 +
        </button>
      </ParticipatingRestaurantUl>
      <div className="subTitle">
        📌{' '}
        <span className="userName">
          {userInfoIsFetching || userInfoError ? null : userInfo.nickname}님
        </span>
        이 기여한 맛집 리스트
      </div>
      <ParticipatingRestaurantUl>
        {contributingRestaurants
          ? flattenPages(contributingRestaurants.pages).map((restaurant) => (
              <ParticipatingRestaurantElem
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          : null}
        <button type="button" className="moreBtn" onClick={crFetchNextPage}>
          더보기 +
        </button>
      </ParticipatingRestaurantUl>
    </ParticipatingRestaurantContainer>
  );
};

export default ParticipatingRestaurant;
