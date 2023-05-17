import React from 'react';
import List from '../../Restaurant/List';
import UserPageHeader from '../../../components/UserPageHeader';
import smileIcon from '../../../assets/img/smile-icon.svg';
import { WishListContainer, WishListHeader } from './wishList.style';
import { useWishlist } from '../myPage.helpers';

const WishList = () => {
  const {
    wishlist,
    // wishlistIsFetching,
    // wishlistError,
    // hasNextPage,
    fetchNextPage,
    flattenPages,
  } = useWishlist();

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
        restaurants={flattenPages(wishlist && wishlist.pages)}
        handlePageNum={fetchNextPage}
        className="myRestaurantList"
      />
    </WishListContainer>
  );
};

export default WishList;
