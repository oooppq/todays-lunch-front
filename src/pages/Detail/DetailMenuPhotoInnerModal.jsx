/* eslint-disable react/prop-types */
import React from 'react';
import {
  DetailMenuPhotoInnerModalContainer,
  DetailMenuPhotoDeleteModalContainer,
} from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import trashIcon from '../../assets/img/colored-trashcan-icon.svg';

const DetailMenuPhotoInnerModal = ({
  isPhotoDeleteModalOpen,
  selectedPhoto,
  handleMenuPhotoDelete,
  closeMenuPhotoInnerModal,
  openPhotoDeleteModal,
  closePhotoDeleteModal,
}) => {
  return (
    <DetailMenuPhotoInnerModalContainer>
      {isPhotoDeleteModalOpen ? (
        <DetailMenuPhotoDeleteModalContainer>
          <div className="modalInner">
            <div className="deleteTitle">해당 사진을 삭제하시겠습니까?</div>
            <div className="deleteWarning">
              한 번 삭제하면 다시 복원할 수 없으니 신중하게 결정해주세요.
            </div>
            <div className="btnOuter">
              <button
                type="button"
                className="deleteInnerBtn"
                onClick={handleMenuPhotoDelete}
              >
                확인
              </button>
              <button
                type="button"
                className="deleteInnerBtn"
                onClick={closePhotoDeleteModal}
              >
                취소
              </button>
            </div>
          </div>
        </DetailMenuPhotoDeleteModalContainer>
      ) : null}
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={closeMenuPhotoInnerModal}
        >
          <img src={xIcon} alt="" />
        </button>
        <img src={selectedPhoto.imageUrl} alt="" className="detailPhoto" />
        {/* <div className="fileName">{selectedPhoto.originalName}</div> */}
        <div className="photoInfo">
          <div className="userName">
            photo by <span className="bold">{selectedPhoto.userName}</span>
          </div>
          <button
            type="button"
            className="deleteBtn"
            onClick={openPhotoDeleteModal}
          >
            <img src={trashIcon} alt="" className="" />
          </button>
        </div>
      </div>
    </DetailMenuPhotoInnerModalContainer>
  );
};

export default DetailMenuPhotoInnerModal;
