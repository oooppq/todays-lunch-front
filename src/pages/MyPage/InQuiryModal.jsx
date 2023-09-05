/* eslint-disable react/prop-types */
import React from 'react';
import { InquiryModalContainer } from './myPage.style';
import xIcon from '../../assets/img/x-icon.svg';
import kakaoIcon from '../../assets/img/kakao-icon.png';

const InQuiryModal = ({ setIsInquiryModalOpen }) => {
  return (
    <InquiryModalContainer>
      <div className="modalInner">
        <div className="modalTop">
          <div className="modalTitle">문의하기</div>
          <button
            type="button"
            className="xBtn"
            onClick={() => {
              setIsInquiryModalOpen(false);
            }}
          >
            <img src={xIcon} alt="" className="" />
          </button>
        </div>
        <a
          href="https://open.kakao.com/o/sPmeloFf"
          className="kakaoOpenChatButton"
          target="_blank"
          rel="noreferrer"
        >
          <img src={kakaoIcon} alt="" className="" />
          <div className="">오픈채팅</div>
        </a>
      </div>
    </InquiryModalContainer>
  );
};

export default InQuiryModal;
