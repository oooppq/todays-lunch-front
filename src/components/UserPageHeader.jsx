import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPageHeaderContainer } from './userPageHeader.style';
import backIcon from '../assets/img/user-back-icon.svg';
import homeIcon from '../assets/img/user-home-icon.svg';
import { useCustomNavigate } from '../libs/common.helpers';

const UserPageHeader = () => {
  const { goToPrevPage, goToHomePage } = useCustomNavigate(useNavigate());
  return (
    <UserPageHeaderContainer>
      <button className="backBtn" type="button" onClick={goToPrevPage}>
        <img src={backIcon} alt="" />
      </button>
      <button className="homeBtn" type="button" onClick={() => goToHomePage()}>
        <img src={homeIcon} alt="" />
      </button>
    </UserPageHeaderContainer>
  );
};

export default UserPageHeader;
