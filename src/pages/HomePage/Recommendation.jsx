/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RecommendationContainer, RecommendationTitle } from './homePage.style';
import RecommendationElem from './RecommendationElem';

const Recommendation = () => {
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
      <Carousel showStatus={false} showArrows={false} showThumbs={false}>
        {data.map((restaurant) => (
          <RecommendationElem key={restaurant.id} restaurant={restaurant} />
        ))}
      </Carousel>
    </RecommendationContainer>
  );
};

export default Recommendation;
