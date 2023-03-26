/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { gotoDetailOnClick } from '../../libs/utils';
import {
  ListElemContainer,
  ListElemImg,
  ListElemInfo,
} from './restaurant.style';
import defaultImage from '../../assets/img/default-image.png';
import ListElemInfoButton from './ListElemInfoButton';
import ListElemWishAndRoulette from './ListElemWishAndRoulette';

const ListElem = ({ restaurant }) => {
  const navigate = useNavigate();
  return (
    <ListElemContainer
      key={restaurant.id}
      onClick={() => gotoDetailOnClick(restaurant.id, navigate)}
    >
      <ListElemImg src={defaultImage} />
      <ListElemInfo>
        <div className="title">
          <span>{restaurant.restaurant_name}</span>
        </div>
        <div className="etc">
          <div>
            <span className="categories">#{restaurant.food_category}</span>
            <span className="categories">#{restaurant.location_category}</span>
            {restaurant.location_category !== restaurant.logcation_tag ? (
              <span className="categories">#{restaurant.location_tag}</span>
            ) : null}
          </div>
          <div className="reviewRate">
            <span>리뷰 {restaurant.review_number}개</span>
            {' | '}
            <span>평점 {restaurant.rate}</span>
          </div>
          <ListElemInfoButton restaurant={restaurant} />
        </div>
      </ListElemInfo>
      <ListElemWishAndRoulette restaurant={restaurant} />
    </ListElemContainer>
  );
};

export default ListElem;
