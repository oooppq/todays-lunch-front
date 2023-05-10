import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import List from '../../Restaurant/List';
import { useResaurant } from '../../Restaurant/restaurant.helpers';
import UserPageHeader from '../../../components/UserPageHeader';
import smileIcon from '../../../assets/img/smile-icon.svg';
import { WishListContainer, WishListHeader } from './wishList.style';

const WishList = () => {
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
    <WishListContainer>
      <UserPageHeader>
        <div className="pageTitle">찜한 맛집</div>
      </UserPageHeader>
      <WishListHeader>
        <div className="explanation">
          <img src={smileIcon} alt="" className="smileIcon" />
          <div className="explanationText">
            <span className="bold">알바트로스님</span>이 찜한 맛집들이에요.
          </div>
        </div>
        <div className="title">
          📌 <span className="userName">알바트로스님</span>이 찜한 맛집 리스트
        </div>
      </WishListHeader>
      <List
        restaurants={restaurants}
        handlePageNum={handlePageNum}
        className="myRestaurantList"
      />
    </WishListContainer>
  );
};

export default WishList;
