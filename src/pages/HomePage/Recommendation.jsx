import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RecommendationContainer, RecommendationTitle } from './homePage.style';
import RecommendationElem from './RecommendationElem';

const Recommendation = () => {
  const accessToken = useSelector((state) => state.userAuth.accessToken);

  const { isLoading, error, data } = useQuery(['recommends', 'list'], () =>
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/recommends`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => res.data)
  );

  // if (isLoading) return null;
  // if (error) return 'error!';

  return (
    <RecommendationContainer>
      <RecommendationTitle>
        🍚 <span>오늘의</span> 맛집
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
