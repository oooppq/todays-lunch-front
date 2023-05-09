import axios from 'axios';
import { useQueries, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setMapCenter, setMapLevel } from '../../redux/map';
import {
  increaseMyPageNum,
  increasePageNum,
  setRestaurants,
  setSelectedLocCat,
  setSelectedLocTag,
} from '../../redux/restaurant';

export const restaurantUrlMaker = (state) => {
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
  url += `&sort=${state.sortBy.query}&page=${state.pageNum}&size=10`;
  url += `&order=descending`;
  return url;
};

/* mode => normal or myPage */
export const useResaurant = (mode) => {
  const restaurantState = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userAuth.accessToken);

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
  // useInfiniteQuery를 사용하여 최적화하기
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
      axios
        .get(restaurantUrlMaker(restaurantState), {
          headers:
            mode === 'myPage'
              ? {
                  Authorization: `Bearer ${accessToken}`,
                }
              : null,
        })
        .then((res) => res.data),
    { refetchOnWindowFocus: false }
  );

  const {
    data: restDataPagination,
    isFetching: restPaginationIsFetching,
    isError: restPaginationIsError,
  } = useQuery(
    ['restaurants', 'pagination', restaurantState.pageNum],
    () =>
      axios
        .get(restaurantUrlMaker(restaurantState), {
          headers:
            mode === 'myPage'
              ? {
                  Authorization: `Bearer ${accessToken}`,
                }
              : null,
        })
        .then((res) => res.data),
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );

  const restaurantIsFetching = restIsFetching || restPaginationIsFetching;

  const restaurantIsError = restIsError || restPaginationIsError;

  const categoryIsFetching = ress.some((res) => res.isFetching);

  const categoryIsError = ress.some((res) => res.isError);

  const handlePageNum =
    mode === 'normal'
      ? () => {
          dispatch(increasePageNum());
        }
      : () => {
          dispatch(increaseMyPageNum());
        };

  const handleRestaurantData = () => {
    if (restaurantState.pageNum === 1) {
      if (restData) dispatch(setRestaurants(restData.data));
    } else if (restDataPagination) {
      dispatch(setRestaurants(restDataPagination.data));
    }
  };

  return {
    locCategory: ress[0],
    locTag: ress[1],
    foodCategory: ress[2],
    recomCategory: ress[3],
    restaurants: restData,
    restDataPagination,
    restaurantIsFetching,
    restaurantIsError,
    categoryIsFetching,
    categoryIsError,
    handlePageNum,
    handleRestaurantData,
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
