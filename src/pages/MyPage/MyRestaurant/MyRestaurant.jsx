import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import List from '../../Restaurant/List';
import { useRestaurant } from '../../Restaurant/restaurant.helpers';
import UserPageHeader from '../../../components/UserPageHeader';
import {
  MyRestaurantContainer,
  MyRestaurantHeader,
} from './myRestaurant.style';
import smileIcon from '../../../assets/img/smile-icon.svg';
import { useMyPage } from '../myPage.helpers';

const MyRestaurant = () => {
  const { userInfo, userInfoIsFetching, userInfoError } = useMyPage();
  const {
    restaurantIsFetching,
    restaurantIsError,
    handlePageNum,
    handleRestaurantData,
  } = useRestaurant();

  const restaurants = useSelector((state) => state.restaurant.restaurants);

  useEffect(handleRestaurantData, [handleRestaurantData]);
  if (restaurantIsFetching || restaurantIsError) return null;
  return (
    <MyRestaurantContainer>
      <UserPageHeader>
        <div className="pageTitle">참여한 맛집</div>
      </UserPageHeader>
      <MyRestaurantHeader>
        <div className="explanation">
          <img src={smileIcon} alt="" className="smileIcon" />
          <div className="explanationText">
            <span className="bold">
              {userInfoIsFetching || userInfoError ? null : userInfo.nickname}님
            </span>
            이 직접 참여하여 완성된 맛집들이에요.
          </div>
        </div>
        <div className="title">
          📌{' '}
          <span className="userName">
            {userInfoIsFetching || userInfoError ? null : userInfo.nickname}님
          </span>
          이 추가한 맛집 리스트
        </div>
      </MyRestaurantHeader>
      <List
        restaurants={restaurants}
        handlePageNum={handlePageNum}
        className="myRestaurantList"
      />
    </MyRestaurantContainer>
  );
};

export default MyRestaurant;
