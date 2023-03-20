/* eslint-disable react/prop-types */
import React from 'react';
import { DetailMenuModalContainer } from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import { useMenuPhoto } from './detail.helpers';

const DetailMenuModal = ({ closeMenuModal, menu }) => {
  const { data, isLoading, isError } = useMenuPhoto(menu.id);
  if (isLoading || isError) return null;

  return (
    <DetailMenuModalContainer>
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
        <div className="">
          {data.map((image) => (
            <img key={image.id} src={image.imageUrl} alt="" />
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
