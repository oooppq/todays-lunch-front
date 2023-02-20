import React, { useState } from 'react';
import { useQueries } from 'react-query';
import axios from 'axios';
import { RestaurantContainer } from './restaurant.style';
import RestaurantNav from './RestaurantNav';
import Map from './Map';
import List from './List';

// 데이터만 받아오는 컴포넌트로 취급하기
const Restaurant = () => {
  const [isMap, setIsMap] = useState(false);

  const ress = useQueries([
    {
      queryKey: ['restuarants'],
      queryFn: () => axios.get('/api/restaurants'),
    },
    {
      queryKey: ['location-category'],
      queryFn: () => axios.get('/api/location-category'),
    },
    {
      queryKey: ['location-tags'],
      queryFn: () => axios.get('/api/location-tags'),
    },
  ]);

  if (ress.every((res) => res.status !== 'loading')) {
    return (
      <RestaurantContainer>
        <RestaurantNav isMap={isMap} setIsMap={setIsMap} />
        {isMap ? (
          <Map
            restaurants={ress[0].data.data}
            locCat={ress[1].data.data}
            locTag={ress[2].data.data}
          />
        ) : (
          <List restaurants={ress[0].data.data} />
        )}
      </RestaurantContainer>
    );
  }
  return null;
};

export default Restaurant;
