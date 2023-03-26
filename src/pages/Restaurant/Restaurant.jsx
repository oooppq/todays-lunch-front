import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery, useQueries } from 'react-query';
import axios from 'axios';
import { RestaurantContainer } from './restaurant.style';
import RestaurantNav from './RestaurantNav';
import Map from './Map';
import List from './List';

const urlMaker = (
  locCat,
  locTag,
  foodCat,
  recomCat,
  keyword,
  sortBy,
  pageNum
) => {
  let url = '/api/restaurants?';
  if (locCat) url += `location-category=${locCat.name}`;
  if (locTag) url += `&location-tag=${locTag.name}`;
  if (foodCat) url += `&food-category=${foodCat.name}`;
  if (recomCat) url += `&recommendation-category=${recomCat.id}`;
  if (keyword.length !== 0) url += `&keyword=${keyword}`;
  url += `&sort=${sortBy.query}&page=${pageNum}&size=10`;
  url += `&order=descending`;
  return url;
};

// 데이터만 받아오는 컴포넌트로 취급하기
const Restaurant = () => {
  const isMap = useSelector((state) => state.restaurant.isMap);
  const selectedLocCat = useSelector(
    (state) => state.restaurant.selectedLocCat
  );
  const selectedLocTag = useSelector(
    (state) => state.restaurant.selectedLocTag
  );
  const selectedFoodCat = useSelector(
    (state) => state.restaurant.selectedFoodCat
  );
  const selectedRecomCat = useSelector(
    (state) => state.restaurant.selectedRecomCat
  );
  const searchKeyword = useSelector((state) => state.restaurant.searchKeyword);
  const sortBy = useSelector((state) => state.restaurant.sortBy);
  const order = useSelector((state) => state.restaurant.order);
  const pageNum = useSelector((state) => state.restaurant.pageNum);

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

  const { data, isLoading, error } = useQuery(
    [
      'restaurants',
      selectedLocCat,
      selectedLocTag,
      selectedFoodCat,
      selectedRecomCat,
      searchKeyword,
      sortBy,
      order,
      pageNum,
    ],
    () =>
      axios
        .get(
          // '/api/restaurants'
          urlMaker(
            selectedLocCat,
            selectedLocTag,
            selectedFoodCat,
            selectedRecomCat,
            searchKeyword,
            sortBy,
            pageNum
          )
        )
        .then((res) => res.data),
    { refetchOnWindowFocus: false }
  );
  if (error) return 'error!';
  if (ress.some((res) => res.status === 'loading')) return null;

  return (
    <RestaurantContainer>
      <RestaurantNav
        locCategory={ress[0].data.data}
        locTag={ress[1].data.data}
        foodCategory={ress[2].data.data}
        recomCategory={ress[3].data.data}
      />
      {(() => {
        if (isLoading) return null;
        if (isMap) return <Map restaurants={data.data} />;
        return <List restaurants={data.data} />;
      })()}
    </RestaurantContainer>
  );
};

export default Restaurant;
