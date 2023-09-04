/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailMenuPhotoModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import { useMenuPhoto } from './detail.helpers';
import Loading from '../../components/Loading';
import DetailMenuPhotoInnerModal from './DetailMenuPhotoInnerModal';
import { useInfiniteScroll } from '../../libs/common.helpers';
import { flattenPages } from '../../libs/utils';

const DetailMenuPhotoModal = ({ closeMenuPhotoModal, menu }) => {
  const navigate = useNavigate();

  const {
    isAuthorized,
    selectedPhoto,
    setSelectedPhoto,
    isPhotoDeleteModalOpen,
    setIsPhotoDeleteModalOpen,
    photos,
    fetchNextPage,
    // isPhotosLoading,
    // photosError,
    // addMenuPhoto,
    addMenuPhotoStatus,
    deleteMenuPhotoRequest,
    deleteMenuPhotoStatus,
    handleAddMenuPhoto,
    openPhotoDeleteModal,
  } = useMenuPhoto(menu.id);
  const { observerRef } = useInfiniteScroll(photos, fetchNextPage);

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
          {menu.imageCount && (
            <div className="menuModalPhotoPhotoNum">[{menu.imageCount}]</div>
          )}
          {/* <button type="button" className="changeThumbBtn">
            대표 이미지 설정
          </button> */}
        </div>
        {photos && (
          <ul className="menuPhotoModalUl">
            {flattenPages(photos.pages).map((image) => (
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
            ))}
            <div ref={observerRef} className="observer" />
          </ul>
        )}
        {isAuthorized() ? (
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
        ) : (
          <button
            type="button"
            className="newPhotoBtn"
            onClick={() => {
              navigate('/login');
            }}
          >
            사진 추가하기
          </button>
        )}
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
            deleteMenuPhotoRequest(selectedPhoto.id);
          }}
          closeMenuPhotoInnerModal={() => {
            setSelectedPhoto(null);
          }}
          openPhotoDeleteModal={() => {
            openPhotoDeleteModal(navigate);
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
