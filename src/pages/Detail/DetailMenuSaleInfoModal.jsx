/* eslint-disable react/prop-types */
import React from 'react';
import { DetailMenuSaleInfoModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';

const DetailMenuSaleInfoModal = ({ saleComment, closeMenuSaleInfoModal }) => {
  return (
    <DetailMenuSaleInfoModalContainer>
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={closeMenuSaleInfoModal}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="saleCommentTitle">세일 설명</div>
        <div className="saleComment">{saleComment}</div>
      </div>
    </DetailMenuSaleInfoModalContainer>
  );
};

export default DetailMenuSaleInfoModal;
