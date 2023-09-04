/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPageHeaderContainer } from './userPageHeader.style';
import backIcon from '../assets/img/user-back-icon.png';
import homeIcon from '../assets/img/user-home-icon.png';
import { useCustomNavigate } from '../libs/common.helpers';

const UserPageHeader = ({ children }) => {
  const { goToPrevPage, goToHomePage } = useCustomNavigate(useNavigate());
  return (
    <UserPageHeaderContainer>
      <button className="backBtn" type="button" onClick={goToPrevPage}>
        <img src={backIcon} alt="" />
      </button>
      {/* {PageTitleDiv ? <children className="pageTitleDiv" /> : null} */}
      {children}
      {/* <children className="pageTitleDiv" /> */}
      <button className="homeBtn" type="button" onClick={() => goToHomePage()}>
        <img src={homeIcon} alt="" />
      </button>
    </UserPageHeaderContainer>
  );
};

export default UserPageHeader;
