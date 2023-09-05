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
    restaurants,
    // restaurantIsFetching,
    // restaurantIsError,
    // categoryIsFetching,
    // categoryIsError,
    // hasNextPage,
    fetchNextPage,
    // getRestaurantData,
    isCategoryFetchingDone,
  } = useRestaurant();

  const isMap = useSelector((state) => state.map.isMap);
  // const restaurants = useSelector((state) => state.restaurant.restaurants);

  // if (categoryIsError || categoryIsFetching) return null;
  return (
    <RestaurantContainer>
      {isCategoryFetchingDone && (
        <RestaurantNav
          locCategory={locCategory.data}
          locTag={locTag.data}
          foodCategory={foodCategory.data}
          recomCategory={recomCategory.data}
        />
      )}

      {isMap && restaurants ? (
        <Map restaurants={restaurants} handlePageNum={fetchNextPage} />
      ) : (
        <List restaurants={restaurants} handlePageNum={fetchNextPage} />
      )}
    </RestaurantContainer>
  );
};

export default Restaurant;
