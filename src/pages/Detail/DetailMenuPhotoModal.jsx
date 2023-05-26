/* eslint-disable react/prop-types */
import React from 'react';
import { DetailMenuPhotoModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import { useMenuPhoto } from './detail.helpers';
import Loading from '../../components/Loading';
import DetailMenuPhotoInnerModal from './DetailMenuPhotoInnerModal';

const DetailMenuPhotoModal = ({ closeMenuPhotoModal, menu }) => {
  const {
    selectedPhoto,
    setSelectedPhoto,
    isPhotoDeleteModalOpen,
    setIsPhotoDeleteModalOpen,
    photos,
    // isPhotosLoading,
    // photosError,
    // addMenuPhoto,
    addMenuPhotoStatus,
    deleteMenuPhoto,
    deleteMenuPhotoStatus,
    handleAddMenuPhoto,
  } = useMenuPhoto(menu.id);

  return (
    <DetailMenuPhotoModalContainer>
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
        <ul className="menuPhotoModalUl">
          {photos
            ? photos.map((image) => (
                <li key={image.id} className="menuPhotoModalLi">
                  <img
                    src={image.imageUrl}
                    alt=""
                    className="menuPhoto"
                    onClick={() => {
                      setSelectedPhoto(image);
                    }}
                    aria-hidden="true"
                  />
                </li>
              ))
            : null}
        </ul>
        <label
          className="newPhotoBtn"
          htmlFor="newMenuPhotoInput"
          onChange={handleAddMenuPhoto}
        >
          사진 추가하기
          <input
            id="newMenuPhotoInput"
            type="file"
            accept="image/*"
            className=""
          />
        </label>
      </div>
      {addMenuPhotoStatus === 'loading' ||
      deleteMenuPhotoStatus === 'loading' ? (
        <Loading />
      ) : null}

      {selectedPhoto ? (
        <DetailMenuPhotoInnerModal
          isPhotoDeleteModalOpen={isPhotoDeleteModalOpen}
          selectedPhoto={selectedPhoto}
          handleMenuPhotoDelete={() => {
            deleteMenuPhoto(selectedPhoto.id);
          }}
          closeMenuPhotoInnerModal={() => {
            setSelectedPhoto(null);
          }}
          openPhotoDeleteModal={() => {
            setIsPhotoDeleteModalOpen(true);
          }}
          closePhotoDeleteModal={() => {
            setIsPhotoDeleteModalOpen(false);
          }}
        />
      ) : null}
    </DetailMenuPhotoModalContainer>
  );
};

export default DetailMenuPhotoModal;
