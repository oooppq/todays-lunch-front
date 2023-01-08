import React from 'react';
import { HomePageContainer } from './\bhomePage.style';
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
