/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { convertNum, gotoDetailOnClick } from '../../libs/utils';
import { ListElemContainer, ListElemInfo } from './restaurant.style';
import defaultImage from '../../assets/img/default-image.png';
import ListElemInfoButton from './ListElemInfoButton';
import ListElemWishAndRoulette from './ListElemWishAndRoulette';
import CroppedImage from '../../components/CroppedImage';

const ListElem = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <ListElemContainer
      key={restaurant.id}
      onClick={() => gotoDetailOnClick(restaurant.id, navigate)}
    >
      <CroppedImage
        src={restaurant.imageUrl || defaultImage}
        style={{
          height: '100%',
          width: '100px',
          marginRight: '16px',
          borderRadius: '3px',
          boxSizing: 'border-box',
        }}
      />
      <ListElemInfo>
        <div className="title">
          <span>{restaurant.restaurantName}</span>
        </div>
        <div className="etc">
          <div>
            <span className="categories">#{restaurant.foodCategory}</span>
            <span className="categories">#{restaurant.locationCategory}</span>
            {restaurant.location_category !== restaurant.logcationTag ? (
              <span className="categories">#{restaurant.locationTag}</span>
            ) : null}
          </div>
          <div className="reviewRate">
            <span>리뷰 {convertNum(restaurant.reviewCount)}개</span>
            {' | '}
            <span>평점 {Number(restaurant.rating).toFixed(1)}</span>
          </div>
          <ListElemInfoButton restaurant={restaurant} />
        </div>
      </ListElemInfo>
      <ListElemWishAndRoulette restaurant={restaurant} />
    </ListElemContainer>
  );
};

export default ListElem;
