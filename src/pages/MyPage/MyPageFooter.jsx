/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { MyPageBottom } from './myPage.style';
import keyIcon from '../../assets/img/key-icon.svg';
import askIcon from '../../assets/img/question-mark-icon.svg';
import logoutIcon from '../../assets/img/logout-icon.svg';

const MyPageFooter = ({
  handleLogoutOnClick,
  handleGoToLogout,
  handleGotoOnClick,
}) => {
  // const navigate = useNavigate();
  useEffect(handleGoToLogout);

  return (
    <MyPageBottom>
      <div className="empty" />
      <button
        type="button"
        id="change-password"
        className="bottomBtn"
        onClick={handleGotoOnClick}
      >
        <img src={keyIcon} alt="" className="bottomBtnIcon" />
        비밀번호 변경
      </button>
      <button type="button" className="bottomBtn">
        <img src={askIcon} alt="" className="bottomBtnIcon" />
        문의하기
      </button>
      <button type="button" className="bottomBtn" onClick={handleLogoutOnClick}>
        <img src={logoutIcon} alt="" className="bottomBtnIcon" />
        로그아웃
      </button>
    </MyPageBottom>
  );
};

export default MyPageFooter;
