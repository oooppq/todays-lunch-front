/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQueries } from 'react-query';

export const useInputValidation = () => {
  const REGEX = {
    EMAIL: /\S+@\S+\.\S+/,
    PWD_RULE: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/,
    NAME_RULE: /^([a-zA-Z0-9가-힣]).{1,10}$/,
  };

  const checkEmail = (email) => {
    return REGEX.EMAIL.test(email);
  };

  const checkNickName = (nickName) => {
    return REGEX.NAME_RULE.test(nickName);
  };

  const checkPassword = (password) => {
    return REGEX.PWD_RULE.test(password);
  };

  const checkPasswordConfirm = (password, passwordConfirm) => {
    return password === passwordConfirm;
  };

  const checkAllForFirst = (email, nickName, password, passwordConfirm) => {
    return (
      checkEmail(email) &&
      checkNickName(nickName) &&
      checkPassword(password) &&
      checkPasswordConfirm(password, passwordConfirm)
    );
  };

  const checkDropdown = (selectedList) => {
    return selectedList.some((elem) => elem.data);
  };

  const checkAllForSecond = (locations, foods) => {
    return checkDropdown(locations) && checkDropdown(foods);
  };

  return {
    checkEmail,
    checkNickName,
    checkPassword,
    checkPasswordConfirm,
    checkAllForFirst,
    checkDropdown,
    checkAllForSecond,
  };
};

export const useJoinHandler = () => {
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [locations, setLocations] = useState([{ id: 0, data: null }]);
  const [foods, setFoods] = useState([{ id: 0, data: null }]);
  const [stage, setStage] = useState(1);

  const joinInfo = {
    email,
    nickName,
    password,
    locations: locations.map((loc) => loc.data && loc.data.name),
    foods: foods.map((fo) => fo.data && fo.data.name),
  };
  const {
    mutate: postJoinRequest,
    status,
    error,
  } = useMutation(() =>
    axios.post('', joinInfo, {
      headers: {
        'Content-Type': `application/json`,
      },
    })
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNickNameChange = (event) => {
    setNickName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const addLocation = () => {
    if (locations[locations.length - 1].data)
      setLocations([
        ...locations,
        {
          id: locations.length,
          data: null,
        },
      ]);
  };

  const changeLocations = (idx, data) => {
    const newLocations = [...locations];
    newLocations[idx] = { id: idx, data };
    setLocations(newLocations);
  };

  const addFood = () => {
    if (foods.every((food) => food.data))
      setFoods([...foods, { id: foods.length, data: null }]);
  };

  const changeFoods = (idx, data) => {
    const newFoods = [...foods];
    newFoods[idx] = { id: idx, data };
    setFoods(newFoods);
  };

  const goToNextStage = () => {
    setStage(stage + 1);
  };

  return {
    email,
    nickName,
    password,
    passwordConfirm,
    locations,
    foods,
    stage,
    status,
    error,
    handleEmailChange,
    handleNickNameChange,
    handlePasswordChange,
    handlePasswordConfirmChange,
    addLocation,
    changeLocations,
    addFood,
    changeFoods,
    goToNextStage,
    postJoinRequest,
  };
};

export const useJoinDropdownHandler = (idx, elements, selectedList) => {
  const [selectedElem, setSelectedElem] = useState(null);

  const changeSelectedElem = (value) => {
    setSelectedElem(value);
  };

  const getDropdownElements = () => {
    if (idx > 0) {
      return elements.filter(
        (elem) => !selectedList.slice(0, idx).includes(elem)
      );
    }
    return elements;
  };

  return { selectedElem, changeSelectedElem, getDropdownElements };
};

export const useWarningHandler = () => {
  const [emailWarning, setEmailWarning] = useState(false);
  const [nickNameWarning, setNickNameWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [passwordConfirmWarning, setPasswordConfirmWarning] = useState(false);
  const [locationWarning, setLocationWarning] = useState(false);
  const [foodWarning, setFoodWarning] = useState(false);

  return {
    emailWarning,
    nickNameWarning,
    passwordWarning,
    passwordConfirmWarning,
    locationWarning,
    foodWarning,
    setEmailWarning,
    setNickNameWarning,
    setPasswordWarning,
    setPasswordConfirmWarning,
    setLocationWarning,
    setFoodWarning,
  };
};

export const useGetCategories = () => {
  const ress = useQueries([
    {
      queryKey: 'location-category',
      queryFn: () =>
        axios.get('/api/location-category').then((res) => res.data),
      refetchOnWindowFocus: false,
    },
    {
      queryKey: 'food-category',
      queryFn: () => axios.get('/api/food-category').then((res) => res.data),
      refetchOnWindowFocus: false,
    },
  ]);
  return {
    locationCategories: ress[0].data,
    foodCategories: ress[1].data,
    isLoading: ress.some((res) => res.isLoading),
    isError: ress.some((res) => res.isError),
  };
};
