/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  DetailMenuPhotoInnerModalContainer,
  DetailMenuPhotoDeleteModalContainer,
  ChangeThumbModalContainer,
} from './detail.style';
import xIcon from '../../assets/img/x-icon.svg';
import trashIcon from '../../assets/img/colored-trashcan-icon.svg';
import { useChnageThumbImage } from './detail.helpers';
import CroppedImage from '../../components/CroppedImage';

const DetailMenuPhotoInnerModal = ({
  isPhotoDeleteModalOpen,
  selectedPhoto,
  handleMenuPhotoDelete,
  closeMenuPhotoInnerModal,
  openPhotoDeleteModal,
  closePhotoDeleteModal,
}) => {
  const userId = useSelector((state) => state.userAuth.id);

  const {
    isChangeModalOpen,
    setIsChangeModalOpen,
    changeThumbRequest,
    handleClickChangeThumbBtn,
  } = useChnageThumbImage(selectedPhoto.id);

  return (
    <DetailMenuPhotoInnerModalContainer>
      {isChangeModalOpen && (
        <ChangeThumbModalContainer>
          <div className="modalInner">
            <div className="changeTitle">
              해당 사진을 대표 이미지로 설정하시겠습니까?
            </div>
            <div className="btnOuter">
              <button
                type="button"
                className="changeInnerBtn"
                onClick={changeThumbRequest}
              >
                확인
              </button>
              <button
                type="button"
                className="changeInnerBtn"
                onClick={() => {
                  setIsChangeModalOpen(false);
                }}
              >
                취소
              </button>
            </div>
          </div>
        </ChangeThumbModalContainer>
      )}
      {isPhotoDeleteModalOpen && (
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
      )}
      <div className="modalInner">
        <button
          className="closeBtn"
          type="button"
          onClick={closeMenuPhotoInnerModal}
        >
          <img src={xIcon} alt="" />
        </button>
        <button
          type="button"
          className="thumbBtn"
          onClick={handleClickChangeThumbBtn}
        >
          대표이미지 지정
        </button>
        <CroppedImage
          src={selectedPhoto.imageUrl}
          style={{
            marginTop: '10px',
            width: '273px',
            height: ' 273px',
            borderRadius: '3px',
          }}
        />
        {/* <img src={selectedPhoto.imageUrl} alt="" className="detailPhoto" /> */}
        {/* <div className="fileName">{selectedPhoto.originalName}</div> */}
        <div className="photoInfo">
          <div className="userName">
            photo by <span className="bold">{selectedPhoto.nickname}</span>
          </div>
          {selectedPhoto.userId === userId && (
            <button
              type="button"
              className="deleteBtn"
              onClick={openPhotoDeleteModal}
            >
              <img src={trashIcon} alt="" className="" />
            </button>
          )}
        </div>
      </div>
    </DetailMenuPhotoInnerModalContainer>
  );
};

export default DetailMenuPhotoInnerModal;
