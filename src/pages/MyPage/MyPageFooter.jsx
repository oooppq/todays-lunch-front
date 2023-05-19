/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MyPageBottom } from './myPage.style';
import keyIcon from '../../assets/img/key-icon.svg';
import askIcon from '../../assets/img/question-mark-icon.svg';
import logoutIcon from '../../assets/img/logout-icon.svg';
import InQuiryModal from './InQuiryModal';

const MyPageFooter = ({
  handleLogoutOnClick,
  handleGoToLogout,
  handleGotoOnClick,
}) => {
  useEffect(handleGoToLogout);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <MyPageBottom>
      {isInquiryModalOpen ? (
        <InQuiryModal setIsInquiryModalOpen={setIsInquiryModalOpen} />
      ) : null}
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
      <button
        type="button"
        className="bottomBtn"
        onClick={() => {
          setIsInquiryModalOpen(true);
        }}
      >
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
