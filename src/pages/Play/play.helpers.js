// import { useState } from 'react';
import { useRoulette } from '../../libs/common.helpers';

/* eslint-disable import/prefer-default-export */
export const usePlay = () => {
  const { rouletteList, pushRoulette, clearRoulette } = useRoulette();
  return { rouletteList, pushRoulette, clearRoulette };
  //   const removeRestaurant = (id) => {};
};
