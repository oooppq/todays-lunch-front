/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

export const useJudgeNow = () => {
  const [isList, setIsList] = useState(true);

  const {
    data: restaurants,
    isLoading: restaurantsIsLoading,
    isError: restaurantsIsError,
  } = useQuery(
    ['judgeNow', 'list'],
    () => axios.get('/api/restaurants/judges').then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    isList,
    setIsList,
    restaurants,
    restaurantsIsLoading,
    restaurantsIsError,
  };
};

export const useJudgeAgree = (id) => {
  const { data: isAgree } = useQuery(
    ['judgeNow/agree', id],
    () =>
      axios.get(`/api/restaurants/judges/${id}/agree`).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate: pushAgree } = useMutation(() =>
    axios.post(`/api/restaurants/judges/${id}/agree`)
  );
  return { pushAgree, isAgree };
};

export const useJudgeNowDetail = (id) => {
  const {
    data: restaurant,
    isLoading: restaurantIsLoading,
    isError: restaurantIsError,
  } = useQuery(
    ['judgeNow', 'detail', id],
    () => axios.get(`/api/restaurants/judges/${id}`).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { pushAgree, isAgree } = useJudgeAgree(id);

  return {
    restaurant,
    restaurantIsLoading,
    restaurantIsError,
    pushAgree,
    isAgree,
  };
};
