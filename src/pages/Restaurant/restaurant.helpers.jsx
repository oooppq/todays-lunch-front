import axios from 'axios';
import { useInfiniteQuery, useQueries } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setMapCenter, setMapLevel } from '../../redux/map';
import { setSelectedLocCat, setSelectedLocTag } from '../../redux/restaurant';

const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const restaurantUrlMaker = (state, pageNum) => {
  let url = `${SERVER_URL}/restaurants?`;

  if (state.selectedLocCat)
    url += `&location-category=${state.selectedLocCat.name}`;

  if (state.selectedLocTag) url += `&location-tag=${state.selectedLocTag.name}`;

  if (state.selectedFoodCat)
    url += `&food-category=${state.selectedFoodCat.name}`;

  if (state.selectedRecomCat)
    url += `&recommend-category-id=${state.selectedRecomCat.id}`;

  if (state.searchKeyword.length !== 0)
    url += `&keyword=${state.searchKeyword}`;
  url += `&sort=${state.sortBy.query}&page=${pageNum || 0}&size=10`;
  url += `&order=descending`;
  return url;
};

export const useRestaurant = () => {
  const restaurantState = useSelector((state) => state.restaurant);
  const accessToken = useSelector((state) => state.userAuth.accessToken);

  const ress = useQueries([
    {
      queryKey: ['location-category'],
      queryFn: () =>
        axios.get(`${SERVER_URL}/location-category`).then((res) => res.data),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ['location-tags'],
      queryFn: () =>
        axios.get(`${SERVER_URL}/location-tag`).then((res) => res.data),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ['food-category'],
      queryFn: () =>
        axios.get(`${SERVER_URL}/food-category`).then((res) => res.data),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ['recommend-category'],
      queryFn: () =>
        axios.get(`${SERVER_URL}/recommend-category`).then((res) => res.data),
      refetchOnWindowFocus: false,
    },
  ]);

  const {
    data: restaurants,
    isFetching: restaurantsIsFetching,
    isError: restaurantsIsError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['restaurants', restaurantState],
    queryFn: async ({ queryKey, pageParam = 0 }) => {
      const res = await axios.get(
        restaurantUrlMaker(queryKey[1], pageParam),
        accessToken
          ? {
              headers: { Authorization: `${accessToken}` },
            }
          : null
      );
      return {
        data: res.data.data,
        pageNum: pageParam,
        isLast: pageParam >= res.data.totalPages - 1,
      };
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.pageNum + 1;
    },
    refetchOnWindowFocus: false,
  });

  const categoryIsFetching = ress.some((res) => res.isFetching);

  const categoryIsError = ress.some((res) => res.isError);

  const isCategoryFetchingDone = ress.every((res) => res.status === 'success');
  return {
    locCategory: ress[0],
    locTag: ress[1],
    foodCategory: ress[2],
    recomCategory: ress[3],
    restaurants,
    hasNextPage,
    fetchNextPage,
    restaurantsIsFetching,
    restaurantsIsError,
    categoryIsFetching,
    categoryIsError,
    isCategoryFetchingDone,
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
