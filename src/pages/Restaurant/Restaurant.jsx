import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RestaurantContainer } from './restaurant.style';
import RestaurantNav from './RestaurantNav';
import Map from './Map';
import List from './List';
import { useResaurant } from './restaurant.helpers';

const Restaurant = () => {
  const {
    locCategory,
    locTag,
    foodCategory,
    recomCategory,
    restaurantIsFetching,
    restaurantIsError,
    categoryIsFetching,
    categoryIsError,
    handlePageNum,
    handleRestaurantData,
  } = useResaurant('normal');

  const isMap = useSelector((state) => state.map.isMap);
  const restaurants = useSelector((state) => state.restaurant.restaurants);

  useEffect(handleRestaurantData, [handleRestaurantData]);

  if (categoryIsError || categoryIsFetching) return null;

  return (
    <RestaurantContainer>
      <RestaurantNav
        locCategory={locCategory.data.data}
        locTag={locTag.data.data}
        foodCategory={foodCategory.data.data}
        recomCategory={recomCategory.data.data}
      />
      {(() => {
        if (restaurantIsFetching || restaurantIsError) return null;
        if (isMap) return <Map restaurants={restaurants.data} />;
        return (
          <List
            // restaurants={restuarants.data}
            restaurants={restaurants}
            handlePageNum={handlePageNum}
          />
        );
      })()}
    </RestaurantContainer>
  );
};

export default Restaurant;
