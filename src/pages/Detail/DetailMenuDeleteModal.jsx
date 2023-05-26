/* eslint-disable react/prop-types */
import React from 'react';
import { DetailMenuDeleteModalContainer } from './detail.style';

const DetailMenuDeleteModal = ({ closeModal, deleteMenu }) => {
  return (
    <DetailMenuDeleteModalContainer>
      <div className="modalInner">
        <div className="deleteComment">해당 메뉴를 삭제하시겠습니까?</div>
        <div className="btns">
          <button type="button" className="btn yesBtn" onClick={deleteMenu}>
            예
          </button>
          <button type="button" className="btn" onClick={closeModal}>
            아니오
          </button>
        </div>
      </div>
    </DetailMenuDeleteModalContainer>
  );
};

export default DetailMenuDeleteModal;
