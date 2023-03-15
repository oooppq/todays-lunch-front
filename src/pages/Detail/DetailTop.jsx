import React from 'react';
import { DetailTopContainer } from './detail.style';
import backIcon from '../../assets/img/detail-back-icon.svg';
import smallPencilIcon from '../../assets/img/detail-small-pencil-icon.svg';
import defaultImage from '../../assets/img/default-image.png';
import smallHeartIcon from '../../assets/img/detail-small-heart-icon.svg';
import dishIcon from '../../assets/img/detail-dish-icon.svg';
import pencilIcon from '../../assets/img/detail-pencil-icon.svg';
import heartIcon from '../../assets/img/detail-heart-icon.svg';
import rouletteIcon from '../../assets/img/detail-roulette-icon.svg';

const DetailTop = () => {
  return (
    <DetailTopContainer>
      <button type="button" className="backBtn">
        <img src={backIcon} alt="" />
      </button>
      <div className="restInfo">
        <img className="restImg" src={defaultImage} alt="" />
        <div className="title">마포리 1987</div>
        <div className="reviewWish">
          <div className="reviewDiv">
            <img src={smallPencilIcon} alt="" />
            <span>3</span>
          </div>
          <div className="wishDiv">
            <img src={smallHeartIcon} alt="" />
            <span>3</span>
          </div>
        </div>
        <div className="rate">4.8</div>
      </div>
      <ul className="navUl">
        <li className="navLi">
          <img className="dish" src={dishIcon} alt="" />
        </li>
        <li className="navLi">
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
