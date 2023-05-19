import React from 'react';
import Preparing from '../../components/Preparing';
// import { useRoulette } from '../../libs/common.helpers';
import { PlayContainer } from './play.style';

const Play = () => {
  // const { getRouletteList, clearRoulette } = useRoulette();

  return (
    <PlayContainer>
      <Preparing />
      {/* {getRouletteList().map((restaurant) => (
        <div key={restaurant.id}>{restaurant.restaurantName}</div>
      ))}
      <button type="button" onClick={() => clearRoulette()}>
        초기화
      </button> */}
    </PlayContainer>
  );
};

export default Play;
