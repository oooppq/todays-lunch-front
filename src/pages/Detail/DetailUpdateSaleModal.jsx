/* eslint-disable react/prop-types */
import React from 'react';
import { DetailUpdateSaleModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';

const DetailUpdateSaleModal = ({ closeUpdateSaleModal }) => {
  return (
    <DetailUpdateSaleModalContainer>
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={() => closeUpdateSaleModal()}
        >
          <img src={xIcon} alt="" />
        </button>
      </div>
    </DetailUpdateSaleModalContainer>
  );
};

export default DetailUpdateSaleModal;
