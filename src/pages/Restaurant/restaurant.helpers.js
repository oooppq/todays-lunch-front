/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { useEffect } from 'react';
// import { useState } from 'react';
import { useInfiniteQuery, useQueries, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { flattenPages } from '../../libs/utils';
import { setMapCenter, setMapLevel } from '../../redux/map';
import { setSelectedLocCat, setSelectedLocTag } from '../../redux/restaurant';

export const restaurantUrlMaker = (state, pageNum) => {
  let url = '/api/restaurants?';
  if (state.selectedFoodCat)
    url += `location-category=${state.selectedFoodCat.name}`;
  if (state.selectedLocTag) url += `&location-tag=${state.selectedLocTag.name}`;
  if (state.selectedFoodCat)
    url += `&food-category=${state.selectedFoodCat.name}`;
  if (state.selectedRecomCat)
    url += `&recommendation-category=${state.selectedRecomCat.id}`;
  if (state.searchKeyword.length !== 0)
    url += `&keyword=${state.searchKeyword}`;
  url += `&sort=${state.sortBy.query}&page=${pageNum || 1}&size=10`;
  url += `&order=descending`;
  return url;
};

export const useRestaurant = () => {
  const restaurantState = useSelector((state) => state.restaurant);

  const ress = useQueries([
    {
      queryKey: 'location-category',
      queryFn: () => axios.get('/api/location-category'),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: 'location-tags',
      queryFn: () => axios.get('/api/location-tags'),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: 'food-category',
      queryFn: () => axios.get('/api/food-category'),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: 'recommend-category',
      queryFn: () => axios.get('/api/recommend-category'),
      refetchOnWindowFocus: false,
    },
  ]);

  const {
    data: restData,
    isFetching: restIsFetching,
    isError: restIsError,
  } = useQuery(
    [
      'restaurants',
      restaurantState.selectedLocCat,
      restaurantState.selectedLocTag,
      restaurantState.selectedFoodCat,
      restaurantState.selectedRecomCat,
      restaurantState.searchKeyword,
      restaurantState.sortBy,
    ],
    () =>
      axios.get(restaurantUrlMaker(restaurantState)).then((res) => res.data),
    { refetchOnWindowFocus: false }
  );

  const {
    data: restDataPagination,
    isFetching: restPaginationIsFetching,
    isError: restPaginationIsError,
    hasNextPage,
    fetchNextPage,
    remove,
  } = useInfiniteQuery({
    queryKey: ['restaurants', 'pagination'],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(restaurantUrlMaker(restaurantState, pageParam)).then((res) => {
        return {
          data: res.data.data,
          pageNum: pageParam,
          isLast: pageParam === res.data.totalPages,
        };
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.pageNum + 1;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    remove();
  }, [remove, restaurantState]);

  const restaurantIsFetching = restIsFetching || restPaginationIsFetching;

  const restaurantIsError = restIsError || restPaginationIsError;

  const categoryIsFetching = ress.some((res) => res.isFetching);

  const categoryIsError = ress.some((res) => res.isError);

  const getRestaurantData = () => {
    if (!restaurantIsError && !restaurantIsFetching) {
      if (restDataPagination.pages.length > 1) {
        return flattenPages(restDataPagination.pages);
      }
      return restData.data;
    }
    return null;
  };

  return {
    locCategory: ress[0],
    locTag: ress[1],
    foodCategory: ress[2],
    recomCategory: ress[3],
    restaurants: restData,
    // restDataPagination,
    hasNextPage,
    fetchNextPage,
    restaurantIsFetching,
    restaurantIsError,
    categoryIsFetching,
    categoryIsError,
    getRestaurantData,
    // flattenPages,
  };
};

export const useCategory = () => {
  const dispatch = useDispatch();

  const changeSelectedLocCat = (locCat) => {
    dispatch(setSelectedLocCat(locCat));
    dispatch(setSelectedLocTag(null));
    if (locCat) {
      dispatch(
        setMapCenter({
          lat: locCat.latitude,
          lng: locCat.longitude,
        })
      );
    }
  };

  const changeSelectedLocTag = (locTag) => {
    dispatch(setSelectedLocTag(locTag));
    if (locTag) {
      dispatch(
        setMapCenter({
          lat: locTag.latitude,
          lng: locTag.longitude,
        })
      );
      dispatch(setMapLevel(4));
    }
  };
  return {
    changeSelectedLocCat,
    changeSelectedLocTag,
  };
};
