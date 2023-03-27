import React from 'react';
import { UserPageHeaderContainer } from './userPageHeader.style';
import backIcon from '../assets/img/user-back-icon.svg';
import homeIcon from '../assets/img/user-home-icon.svg';

const UserPageHeader = () => {
  return (
    <UserPageHeaderContainer>
      <button className="backBtn" type="button">
        <img src={backIcon} alt="" />
      </button>
      <button className="homeBtn" type="button">
        <img src={homeIcon} alt="" />
      </button>
    </UserPageHeaderContainer>
  );
};

export default UserPageHeader;
