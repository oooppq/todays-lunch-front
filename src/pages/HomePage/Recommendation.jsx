import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RecommendationContainer, RecommendationTitle } from './homePage.style';
import RecommendationElem from './RecommendationElem';
import riceIcon from '../../assets/img/rice-icon.png';

const Recommendation = () => {
  const accessToken = useSelector((state) => state.userAuth.accessToken);

  const { isLoading, error, data } = useQuery(['recommends', 'list'], () =>
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/restaurants/recommendation`,
        accessToken
          ? {
              headers: { Authorization: `${accessToken}` },
            }
          : null
      )
      .then((res) => res.data)
  );

  // if (isLoading) return null;
  // if (error) return 'error!';

  return (
    <RecommendationContainer>
      <RecommendationTitle>
        <img src={riceIcon} alt="" className="riceIcon" />
        <span>오늘의</span> 맛집
      </RecommendationTitle>
      {!isLoading && !error && (
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          emulateTouch
        >
          {data
            ? data.map((restaurant) => (
                <RecommendationElem
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))
            : null}
        </Carousel>
      )}
    </RecommendationContainer>
  );
};

export default Recommendation;
