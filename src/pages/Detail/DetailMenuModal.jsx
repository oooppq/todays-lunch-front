/* eslint-disable react/prop-types */
import React from 'react';
import {
  DetailMenuPhotoModalContainer,
  DetailMenuModalContainer,
} from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import { useMenuPhoto } from './detail.helpers';
import { useMenuModal } from './detail.states';

const DetailMenuModal = ({ closeMenuModal, menu }) => {
  const { data, isLoading, isError } = useMenuPhoto(menu.id);
  const { selectedPhoto, openPhotoDetailModal, closePhotoDetailModal } =
    useMenuModal();

  if (isLoading || isError) return null;

  return (
    <DetailMenuModalContainer>
      {selectedPhoto ? (
        <DetailMenuPhotoModalContainer>
          <div className="modalInner">
            <button
              className="closeBtn"
              type="button"
              onClick={() => closePhotoDetailModal()}
            >
              <img src={xIcon} alt="" />
            </button>
            <img src={selectedPhoto.imageUrl} alt="" className="detailPhoto" />
            <div className="fileName">{selectedPhoto.originalName}</div>
            <div className="userName">photo by {selectedPhoto.userName}</div>
          </div>
        </DetailMenuPhotoModalContainer>
      ) : null}
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={() => closeMenuModal()}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="menuModalTop">
          <div className="menuModalTitle">{menu.name}</div>
          <span className="menuModalPhotoNum">({menu.photoNum})</span>
        </div>
        <div className="menuModalImgOuter">
          {data.map((image) => (
            <img
              key={image.id}
              src={image.imageUrl}
              alt=""
              className="menuImg"
              onClick={() => {
                openPhotoDetailModal(image);
              }}
              aria-hidden="true"
            />
          ))}
        </div>
        <button className="newPhotoBtn" type="button">
          사진 추가하기
        </button>
      </div>
    </DetailMenuModalContainer>
  );
};

export default DetailMenuModal;
