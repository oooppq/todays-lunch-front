/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailTopContainer } from './detail.style';
import backIcon from '../../assets/img/detail-back-icon.svg';
import smallPencilIcon from '../../assets/img/detail-small-pencil-icon.svg';
import defaultImage from '../../assets/img/default-image.png';
import smallHeartIcon from '../../assets/img/detail-small-heart-icon.svg';
import dishIcon from '../../assets/img/detail-dish-icon.svg';
import pencilIcon from '../../assets/img/detail-review-icon.png';
import heartIcon from '../../assets/img/detail-heart-icon.svg';
import coloredHeartIcon from '../../assets/img/colored-heart-icon.svg';
import rouletteIcon from '../../assets/img/detail-roulette-icon.svg';
import coloredRouletteIcon from '../../assets/img/colored-roulette-icon.svg';
import { handleGoBack } from './detail.helpers';
import { useRoulette, useShare, useWish } from '../../libs/common.helpers';
import CroppedImage from '../../components/CroppedImage';

const DetailTop = ({ restaurant, tab, changeTab }) => {
  const navigate = useNavigate();

  const { isInRoulette, pushRoulette } = useRoulette(restaurant.id);
  const { isWish, handlePushWish } = useWish(
    restaurant && restaurant.id,
    restaurant.liked
  );

  const { isShareModalOpen, ShareModalBtn, ShareModal } = useShare(restaurant);

  return (
    <DetailTopContainer>
      <div className="detailTopBtns">
        <button
          type="button"
          className="backBtn"
          onClick={() => {
            handleGoBack(navigate);
          }}
        >
          <img src={backIcon} alt="" />
        </button>
        <ShareModalBtn className="shareModalBtn" />
      </div>
      {isShareModalOpen && <ShareModal />}
      <div className="restInfo">
        <CroppedImage
          style={{
            display: 'block',
            width: '164px',
            height: '164px',
            margin: '0 auto',
            borderRadius: '3px',
          }}
          src={restaurant.imageUrl || defaultImage}
        />

        <div className="title">{restaurant.restaurantName}</div>
        <div className="reviewWish">
          <div className="reviewDiv">
            <img src={smallPencilIcon} alt="" />
            <span>{restaurant.reviewCount}</span>
          </div>
          <div className="wishDiv">
            <img src={smallHeartIcon} alt="" />
            <span>{restaurant.likeCount}</span>
          </div>
        </div>
        <div className="rate">{Number(restaurant.rating).toFixed(1)}</div>
        {restaurant.bestReview && (
          <div className="bestReview">"{restaurant.bestReview}"</div>
        )}
      </div>

      <ul className="navUl">
        <li
          className={`navLi main ${tab === 'main' ? 'active' : null}`}
          onClick={() => {
            changeTab('main');
          }}
          aria-hidden="true"
        >
          <img className="dish" src={dishIcon} alt="" />
        </li>
        <li
          className={`navLi review ${tab === 'review' ? 'active' : null}`}
          onClick={() => {
            changeTab('review');
          }}
          aria-hidden="true"
        >
          <img src={pencilIcon} alt="" width={40} height={40} />
        </li>
        <li
          className="navLi"
          onClick={() => {
            handlePushWish(navigate);
          }}
          aria-hidden="true"
        >
          <img src={isWish ? coloredHeartIcon : heartIcon} alt="" />
        </li>
        <li className="navLi">
          <img
            src={isInRoulette ? coloredRouletteIcon : rouletteIcon}
            alt=""
            onClick={() => {
              pushRoulette(restaurant);
            }}
            aria-hidden="true"
          />
        </li>
      </ul>
    </DetailTopContainer>
  );
};

export default DetailTop;
