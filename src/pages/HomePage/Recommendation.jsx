/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  RecommendationContainer,
  RecommendationTitle,
  RecommendationInfoUp,
  RecommendationInfoDown,
  RecommendationElem,
} from './homePage.style';
import defaultImage from '../../assets/img/κ°μΈ λ²€λ.png';
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
      <RecommendationTitle>
        π <span>μ€λμ</span> λ§μ§
      </RecommendationTitle>
      <Carousel
        showStatus={false}
        showArrows
        showThumbs={false}
        showIndicators={false}
      >
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
                  {convertNum(e.lowest_price)}μ ~
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
                <span className="reviewNum">λ¦¬λ·° {e.rating}κ°</span>
                {' | '}
                <span className="rating">λ³μ  {e.rating}</span>
              </div>
            </RecommendationInfoDown>
          </RecommendationElem>
        ))}
      </Carousel>
    </RecommendationContainer>
  );
};

export default Recommendation;
