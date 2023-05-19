/* eslint-disable react/prop-types */
import React from 'react';
import { InquiryModalContainer } from './myPage.style';
import xIcon from '../../assets/img/x-icon.svg';
import Preparing from '../../components/Preparing';

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
        <Preparing />
      </div>
    </InquiryModalContainer>
  );
};

export default InQuiryModal;
