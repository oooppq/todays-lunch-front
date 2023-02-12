import React from 'react';
import { HomePageContainer } from './homePage.style';
import Recommendation from './Recommendation';
import Sale from './Sale';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Recommendation />
      <Sale />
    </HomePageContainer>
  );
};

export default HomePage;
