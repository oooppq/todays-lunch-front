import { useState } from 'react';

export const useCustomNavigate = (navigate) => {
  const goToPrevPage = () => {
    navigate(-1);
  };

  const goToHomePage = () => {
    navigate('/');
  };
  return { goToPrevPage, goToHomePage };
};

export const useLoginHandler = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const getEmail = (value) => {
    setEmail(value);
  };
  const getPassword = (value) => {
    setPassword(value);
  };
  return { email, password, getEmail, getPassword };
};
