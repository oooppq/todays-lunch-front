import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery, useQueries } from 'react-query';
import axios from 'axios';
import { RestaurantContainer } from './restaurant.style';
import RestaurantNav from './RestaurantNav';
import Map from './Map';
import List from './List';

const urlMaker = (locCat, locTag, foodCat, keyword, sortBy, order, pageNum) => {
  let url = '/api/restaurants?';
  if (locCat.id !== 1) url += `location-category=${locCat.id}`;
  if (locTag.id !== 1) url += `&location-tag=${locTag.id}`;
  if (foodCat.id !== 1) url += `&food-category=${foodCat.id}`;
  if (keyword.length !== 0) url += `&keyword=${keyword}`;
  url += `&sort=${sortBy.query}&page=${pageNum}`;
  if (order) url += `&order=descending`;
  else url += `&order=ascending`;
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
  const searchKeyword = useSelector((state) => state.restaurant.searchKeyword);
  const sortBy = useSelector((state) => state.restaurant.sortBy);
  const order = useSelector((state) => state.restaurant.order);
  const pageNum = useSelector((state) => state.restaurant.pageNum);

  const ress = useQueries([
    {
      queryKey: ['location-category'],
      queryFn: () => axios.get('/api/location-category'),
    },
    {
      queryKey: ['location-tags'],
      queryFn: () => axios.get('/api/location-tags'),
    },
    {
      queryKey: ['food-category'],
      queryFn: () => axios.get('/api/food-category'),
    },
  ]);

  const { data, isLoading, error } = useQuery(
    [
      'restaurants',
      selectedLocCat,
      selectedLocTag,
      selectedFoodCat,
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
            searchKeyword,
            sortBy,
            order,
            pageNum
          )
        )
        .then((res) => res.data)
  );
  if (error) return 'error!';
  if (isLoading) return null;
  if (ress.some((res) => res.status === 'loading') || isLoading) return null;

  return (
    <RestaurantContainer>
      <RestaurantNav
        locCategory={ress[0].data.data}
        locTag={ress[1].data.data}
        foodCategory={ress[2].data.data}
      />
      {isMap ? (
        <Map restaurants={data} />
      ) : (
        <List restaurants={data} totalPageNum={10} />
      )}
    </RestaurantContainer>
  );
};

export default Restaurant;
