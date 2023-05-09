import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import List from '../../Restaurant/List';
import { useResaurant } from '../../Restaurant/restaurant.helpers';
import UserPageHeader from '../../../components/UserPageHeader';
import {
  MyRestaurantContainer,
  MyRestaurantHeader,
} from './myRestaurant.style';
import smileIcon from '../../../assets/img/smile-icon.svg';

const MyRestaurant = () => {
  const {
    restaurantIsFetching,
    restaurantIsError,
    handlePageNum,
    handleRestaurantData,
  } = useResaurant('myPage');

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
            <span className="bold">알바트로스님</span>이 직접 참여하여 완성된
            맛집들이에요.
          </div>
        </div>
        <div className="title">
          📌 <span className="bold">알바트로스님</span>이 추가한 맛집 리스트
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
