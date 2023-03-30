/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export const useJoinHandler = () => {
  const [email, setEmail] = useState(null);
  const [nickName, setNickName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [locations, setLocations] = useState([{ id: 0, data: null }]);
  const [foods, setFoods] = useState([{ id: 0, data: null }]);
  const [stage, setStage] = useState(2);

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

  const checkPassword = () => {
    return password === passwordConfirm;
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
    handleEmailChange,
    handleNickNameChange,
    handlePasswordChange,
    handlePasswordConfirmChange,
    checkPassword,
    addLocation,
    changeLocations,
    addFood,
    changeFoods,
    goToNextStage,
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
