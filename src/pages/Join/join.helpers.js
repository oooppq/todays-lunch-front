/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export const useJoinHandler = () => {
  const [email, setEmail] = useState(null);
  const [nickName, setNickName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [location, setLocation] = useState([]);
  const [food, setFood] = useState([]);
  const [stage, setStage] = useState(1);

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

  const changeLocation = (value) => {
    setLocation(value);
  };

  const changeFood = (value) => {
    setFood(value);
  };

  const goToNextStage = () => {
    setStage(stage + 1);
  };

  return {
    email,
    nickName,
    password,
    passwordConfirm,
    location,
    food,
    stage,
    handleEmailChange,
    handleNickNameChange,
    handlePasswordChange,
    handlePasswordConfirmChange,
    checkPassword,
    changeLocation,
    changeFood,
    goToNextStage,
  };
};
