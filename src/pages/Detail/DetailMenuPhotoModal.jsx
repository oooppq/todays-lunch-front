/* eslint-disable react/prop-types */
import React from 'react';
import {
  DetailMenuPhotoInnerModalContainer,
  DetailMenuPhotoModalContainer,
} from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import { useMenuPhoto, useMenuModal } from './detail.helpers';

const DetailMenuPhotoModal = ({ closeMenuPhotoModal, menu }) => {
  const {
    photos,
    // isPhotosLoading,
    // photosError,
    // addMenuPhoto,
    // addMenuPhotoStatus,
    // deleteMenuPhoto,
    // deleteMenuPhotoStatus,
  } = useMenuPhoto(menu.id);
  const { selectedPhoto, openPhotoDetailModal, closePhotoDetailModal } =
    useMenuModal();

  return (
    <DetailMenuPhotoModalContainer>
      {selectedPhoto ? (
        <DetailMenuPhotoInnerModalContainer>
          <div className="modalInner">
            <button
              className="closeBtn"
              type="button"
              onClick={closePhotoDetailModal}
            >
              <img src={xIcon} alt="" />
            </button>
            <img src={selectedPhoto.imageUrl} alt="" className="detailPhoto" />
            <div className="fileName">{selectedPhoto.originalName}</div>
            <div className="userName">photo by {selectedPhoto.userName}</div>
          </div>
        </DetailMenuPhotoInnerModalContainer>
      ) : null}
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={closeMenuPhotoModal}
        >
          <img src={xIcon} alt="" />
        </button>
        <div className="menuPhotoModalTop">
          <div className="menuPhotoModalTitle">{menu.name}</div>
          <span className="menuModalPhotoPhotoNum">({menu.photoNum})</span>
        </div>
        <div className="menuPhotoModalPhotoOuter">
          {photos
            ? photos.map((image) => (
                <img
                  key={image.id}
                  src={image.imageUrl}
                  alt=""
                  className="menuPhoto"
                  onClick={() => {
                    openPhotoDetailModal(image);
                  }}
                  aria-hidden="true"
                />
              ))
            : null}
        </div>
        <button className="newPhotoBtn" type="button">
          사진 추가하기
        </button>
      </div>
    </DetailMenuPhotoModalContainer>
  );
};

export default DetailMenuPhotoModal;
