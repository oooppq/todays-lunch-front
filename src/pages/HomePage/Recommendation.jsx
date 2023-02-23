/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  RecommendationContainer,
  RecommendationTitle,
  RecommendationInfoUp,
  SliderDotContainer,
  RecommendationInfoDown,
  RecommendationElem,
} from './homePage.style';
import defaultImage from '../../assets/img/가츠벤또.png';
import wishIcon from '../../assets/img/add-wish-icon.svg';
import rouletteIcon from '../../assets/img/add-roulette-icon.svg';
import selectedSliderDotIcon from '../../assets/img/selected-slider-dot-icon.svg';
import sliderDotIcon from '../../assets/img/slider-dot-icon.svg';

import { gotoDetailOnClick, convertNum } from '../../libs/utils';

const Recommendation = () => {
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery(['recommends', 'list'], () =>
    axios.get('/api/recommends').then((res) => res.data)
  );

  if (isLoading) return null;
  if (error) return 'error!';

  return (
    <RecommendationContainer>
      <RecommendationTitle>
        🍚 <span>오늘의</span> 맛집
      </RecommendationTitle>

      {data.map((e) => (
        <RecommendationElem
          id={e.id}
          key={e.id}
          onClick={() => gotoDetailOnClick(e.id, navigate)}
        >
          <RecommendationInfoUp>
            <img className="restaurantImage" src={defaultImage} alt="" />
            <div className="infoUpInner">
              <img className="icon" src={wishIcon} alt="" />
              <img className="icon" src={rouletteIcon} alt="" />
              <div className="lowestPrice">
                {convertNum(e.lowest_price)}원 ~
              </div>
            </div>
          </RecommendationInfoUp>
          <RecommendationInfoDown>
            <div className="title">
              <span>[{e.location_category}</span>
              <span> {e.location_tag}] </span>
              <span>{e.name}</span>
            </div>
            <div className="comment">"{e.comment}"</div>
            <div className="reviewRate">
              <span className="reviewNum">리뷰 {e.rating}개</span>
              {' | '}
              <span className="rating">별점 {e.rating}</span>
            </div>
          </RecommendationInfoDown>
        </RecommendationElem>
      ))}
      <SliderDotContainer>
        <img src={sliderDotIcon} alt="" />
        <img src={sliderDotIcon} alt="" />
        <img src={selectedSliderDotIcon} alt="" />
        <img src={sliderDotIcon} alt="" />
        <img src={sliderDotIcon} alt="" />
      </SliderDotContainer>
    </RecommendationContainer>
  );
};

export default Recommendation;
