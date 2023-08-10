import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAuth } from '../../../libs/userAuth.helpers';

const url = `${import.meta.env.VITE_API_BASE_URL}/restaurants/judges`;
/* mode => normal or myPage */
export const useJudgeNow = () => {
  const [isList, setIsList] = useState(true);

  const {
    data: restaurants,
    isLoading: restaurantsIsLoading,
    isError: restaurantsIsError,
  } = useQuery(
    ['judgeNow', 'list'],
    () => axios.get(url).then((res) => res.data),
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
  const { authInfo, isAuthorized } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: pushAgreeRequest } = useMutation(
    () =>
      axios.post(url.concat(`/${id}/agree`), null, {
        headers: {
          Authorization: `Bearer ${authInfo.accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['judgeNow', 'list']);
        queryClient.invalidateQueries(['judgeNow', 'detail', id]);
      },
    }
  );

  const pushAgree = (navigate) => {
    if (isAuthorized()) {
      pushAgreeRequest();
    } else {
      navigate('/login');
    }
  };
  return { pushAgree };
};

export const useJudgeNowDetail = (id) => {
  const {
    data: restaurant,
    isLoading: restaurantIsLoading,
    isError: restaurantIsError,
  } = useQuery(
    ['judgeNow', 'detail', id],
    () => axios.get(url.concat(`/${id}`)).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { pushAgree } = useJudgeAgree(id);

  return {
    restaurant,
    restaurantIsLoading,
    restaurantIsError,
    pushAgree,
  };
};
