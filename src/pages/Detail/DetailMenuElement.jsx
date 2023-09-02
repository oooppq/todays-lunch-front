/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { convertNum } from '../../libs/utils';
import pencilIcon from '../../assets/img/detail-pencil-icon.svg';
import cameraIcon from '../../assets/img/colored-camera-icon.svg';
import DetailMenuFetchModal from './DetailMenuFetchModal';
import Loading from '../../components/Loading';
import DetailMenuPhotoModal from './DetailMenuPhotoModal';
import DetailMenuSaleInfoModal from './DetailMenuSaleInfoModal';

const DetailMenuElement = ({ menu, useMenuElem }) => {
  const navigate = useNavigate();

  const {
    isMenuUpdateModalOpen,
    setIsMenuUpdateModalOpen,
    isMenuPhotoModalOpen,
    setIsMenuPhotoModalOpen,
    isMenuSaleInfoModalOpen,
    setIsMenuSaleInfoModalOpen,
    updateMenu,
    updateMenuStatus,
    deleteMenu,
    deleteMenuStatus,
    openMenuUpdateModal,
  } = useMenuElem(menu.id);

  return (
    <li className="menuLi" aria-hidden="true">
      {updateMenuStatus === 'loading' ||
        (deleteMenuStatus === 'loading' && <Loading />)}
      {isMenuUpdateModalOpen && (
        <DetailMenuFetchModal
          closeMenuFetchModal={() => {
            setIsMenuUpdateModalOpen(false);
          }}
          menu={menu}
          fetchMenu={updateMenu}
          deleteMenu={deleteMenu}
        />
      )}

      {isMenuPhotoModalOpen && (
        <DetailMenuPhotoModal
          closeMenuPhotoModal={() => {
            setIsMenuPhotoModalOpen(false);
          }}
          menu={menu}
        />
      )}
      {isMenuSaleInfoModalOpen && menu.saleComment && (
        <DetailMenuSaleInfoModal
          saleComment={menu.saleComment}
          closeMenuSaleInfoModal={() => {
            setIsMenuSaleInfoModalOpen(false);
          }}
        />
      )}
      <div className="menuLiInner">
        <div className="menuName">{menu.name}</div>
        <button
          type="button"
          className="menuPhotoBtn"
          onClick={() => {
            setIsMenuPhotoModalOpen(true);
          }}
        >
          <img src={cameraIcon} alt="" className="" />
          {menu.photoNum}
        </button>

        {menu.salePrice ? (
          <button
            type="button"
            className="saleOuter"
            onClick={() => {
              setIsMenuSaleInfoModalOpen(true);
            }}
          >
            <div className="saleTag">sale</div>
            <div className="salePrice">{convertNum(menu.salePrice)}원</div>
          </button>
        ) : (
          <div className="menuPrice">{convertNum(menu.price)}원</div>
        )}
        <button
          type="button"
          className="changeBtn"
          onClick={() => {
            openMenuUpdateModal(navigate);
          }}
        >
          <img src={pencilIcon} alt="" className="" />
        </button>
      </div>
    </li>
  );
};

export default DetailMenuElement;
