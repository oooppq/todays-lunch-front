/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export const useJoinHandler = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [stage, setStage] = useState(1);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const goToNextStage = () => {
    setStage(stage + 1);
  };

  return {
    email,
    password,
    stage,
    handleEmailChange,
    handlePasswordChange,
    goToNextStage,
  };
};
