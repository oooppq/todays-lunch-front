import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAuth } from '../../../libs/userAuth.helpers';

const url = `${import.meta.env.VITE_API_BASE_URL}/restaurants/judges`;
/* mode => normal or myPage */
export const useJudgeNow = () => {
  const [isList, setIsList] = useState(true);
  const userAuth = useSelector((state) => state.userAuth);

  const {
    data: restaurants,
    isLoading: restaurantsIsLoading,
    isError: restaurantsIsError,
    status: restaurantStatus,
  } = useQuery(
    ['judgeNow', 'list'],
    () =>
      axios
        .get(url, { headers: { Authorization: userAuth.accessToken } })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      // enabled: userAuth.state !== 'pending',
    }
  );

  return {
    isList,
    setIsList,
    restaurants,
    restaurantsIsLoading,
    restaurantsIsError,
    restaurantStatus,
  };
};

export const useJudgeAgree = (id) => {
  const { authInfo, isAuthorized } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: pushAgreeRequest } = useMutation(
    () =>
      axios.post(url.concat(`/${id}/agree`), null, {
        headers: {
          Authorization: `${authInfo.accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['judgeNow', 'list']);
        queryClient.invalidateQueries(['judgeNow', 'detail', id]);
        queryClient.resetQueries(['myJudge', 'list']);
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
