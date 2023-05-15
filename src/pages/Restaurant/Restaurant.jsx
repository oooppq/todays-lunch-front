import React, { useEffect } from 'react';
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
    // restDataPagination,
    categoryIsFetching,
    categoryIsError,
    // handlePageNum,
    fetchNextPage,
    handleRestaurantData,
    // flattenPages,
  } = useRestaurant();

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
      {isMap ? (
        <Map restaurants={restaurants} />
      ) : (
        <List
          // restaurants={flattenPages(
          //   restDataPagination && restDataPagination.pages
          // )}
          restaurants={restaurants}
          // handlePageNum={handlePageNum}
          handlePageNum={fetchNextPage}
        />
      )}
    </RestaurantContainer>
  );
};

export default Restaurant;
