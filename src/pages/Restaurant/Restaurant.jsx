import React from 'react';
import { useSelector } from 'react-redux';
import { RestaurantContainer } from './restaurant.style';
import RestaurantNav from './RestaurantNav';
import Map from './Map';
import List from './List';
import { useRestaurant } from './restaurant.helpers';

const Restaurant = () => {
  const {
    locCategory,
    locTag,
    foodCategory,
    recomCategory,
    // restaurantIsFetching,
    // restaurantIsError,
    categoryIsFetching,
    categoryIsError,
    // hasNextPage,
    fetchNextPage,
    getRestaurantData,
  } = useRestaurant();

  const isMap = useSelector((state) => state.map.isMap);
  // const restaurants = useSelector((state) => state.restaurant.restaurants);

  // if (categoryIsError || categoryIsFetching) return null;
  return (
    <RestaurantContainer>
      {!categoryIsError && !categoryIsFetching && (
        <RestaurantNav
          locCategory={locCategory.data}
          locTag={locTag.data}
          foodCategory={foodCategory.data}
          recomCategory={recomCategory.data}
        />
      )}

      {isMap ? (
        <Map restaurants={getRestaurantData()} />
      ) : (
        <List restaurants={getRestaurantData()} handlePageNum={fetchNextPage} />
      )}
    </RestaurantContainer>
  );
};

export default Restaurant;
