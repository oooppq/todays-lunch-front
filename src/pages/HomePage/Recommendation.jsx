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
  RecommendationInfoDown,
  RecommendationElem,
} from './homePage.style';
// import defaultImage from '../../assets/img/default-image.png';
import defaultImage from '../../assets/img/가츠벤또.png';
import wishIcon from '../../assets/img/add-wish-icon.svg';
import rouletteIcon from '../../assets/img/add-roulette-icon.svg';
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
      <RecommendationTitle className="bold">
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
              <div>{convertNum(e.lowest_price)}원~</div>
            </div>
          </RecommendationInfoUp>
          <RecommendationInfoDown>
            <span>[{e.location_category}</span>
            <span> {e.location_tag}] </span>
            <span>{e.name}</span>
            <span className="rating"> {e.rating}</span>
            <div>"{e.comment}"</div>
          </RecommendationInfoDown>
        </RecommendationElem>
      ))}
    </RecommendationContainer>
  );
};

export default Recommendation;
