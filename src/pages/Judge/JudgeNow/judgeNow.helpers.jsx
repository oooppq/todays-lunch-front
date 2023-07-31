import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useAuth } from '../../../libs/userAuth.helpers';

const url = `${import.meta.env.VITE_SERVER_URL}/restaurants/judges`;
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

  const { data: isAgreeRes } = useQuery(
    ['judgeNow/agree', id],
    () =>
      axios.get(url.concat(`/${id}/agree`)).then((res) => res.data, {
        header: {
          Authorization: `Bearer ${authInfo.accessToken}`,
        },
      }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate: pushAgreeRequest } = useMutation(() =>
    axios.post(url.concat(`/${id}/agree`), null, {
      headers: {
        Authorization: `Bearer ${authInfo.accessToken}`,
      },
    })
  );

  const isAgree = isAuthorized() && isAgreeRes;

  const pushAgree = (navigate) => {
    if (isAuthorized()) {
      pushAgreeRequest();
    } else {
      navigate('/login');
    }
  };
  return { pushAgree, isAgree };
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

  const { pushAgree, isAgree } = useJudgeAgree(id);

  return {
    restaurant,
    restaurantIsLoading,
    restaurantIsError,
    pushAgree,
    isAgree,
  };
};
