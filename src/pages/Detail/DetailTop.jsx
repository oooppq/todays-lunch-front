/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailTopContainer } from './detail.style';
import backIcon from '../../assets/img/detail-back-icon.svg';
import smallPencilIcon from '../../assets/img/detail-small-pencil-icon.svg';
import defaultImage from '../../assets/img/default-image.png';
import smallHeartIcon from '../../assets/img/detail-small-heart-icon.svg';
import dishIcon from '../../assets/img/detail-dish-icon.svg';
import pencilIcon from '../../assets/img/detail-pencil-icon.svg';
import heartIcon from '../../assets/img/detail-heart-icon.svg';
import rouletteIcon from '../../assets/img/detail-roulette-icon.svg';
import { handleGoBack } from './detail.helpers';

const DetailTop = ({ restaurantData, tab, changeTab }) => {
  const navigate = useNavigate();

  return (
    <DetailTopContainer>
      <button
        type="button"
        className="backBtn"
        onClick={() => {
          handleGoBack(navigate);
        }}
      >
        <img src={backIcon} alt="" />
      </button>
      <div className="restInfo">
        <img className="restImg" src={defaultImage} alt="" />
        <div className="title">{restaurantData.restaurantName}</div>
        <div className="reviewWish">
          <div className="reviewDiv">
            <img src={smallPencilIcon} alt="" />
            <span>{restaurantData.reviewCount}</span>
          </div>
          <div className="wishDiv">
            <img src={smallHeartIcon} alt="" />
            <span>{restaurantData.wishCount}</span>
          </div>
        </div>
        <div className="rate">{restaurantData.rating}</div>
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
          <img src={pencilIcon} alt="" />
        </li>
        <li className="navLi">
          <img src={heartIcon} alt="" />
        </li>
        <li className="navLi">
          <img src={rouletteIcon} alt="" />
        </li>
      </ul>
    </DetailTopContainer>
  );
};

export default DetailTop;
