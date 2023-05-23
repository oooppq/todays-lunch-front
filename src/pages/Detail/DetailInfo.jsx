/* eslint-disable react/prop-types */
import React from 'react';
import { DetailInfoContainer } from './detail.style';
import smileIcon from '../../assets/img/smile-icon.svg';
import cameraIcon from '../../assets/img/colored-camera-icon.svg';
import { convertNum } from '../../libs/utils';
import {
  useMenuModal,
  useUpdateMenuModal,
  useUpdateSaleModal,
} from './detail.helpers';
import DetailUpdateMenuModal from './DetailUpdateMenuModal';
import DetailMenuModal from './DetailMenuModal';
import DetailUpdateSaleModal from './DetailUpdateSaleModal';

const DetailInfo = ({ restaurantData, menuData }) => {
  const { isMenu, selectedMenu, openMenuModal, closeMenuModal } =
    useMenuModal();
  const { isUpdateMenu, openUpdateMenuModal, closeUpdateMenuModal } =
    useUpdateMenuModal();
  const {
    isUpdateSale,
    // openUpdateSaleModal,
    closeUpdateSaleModal,
  } = useUpdateSaleModal();

  return (
    <DetailInfoContainer>
      {isMenu && (
        <DetailMenuModal closeMenuModal={closeMenuModal} menu={selectedMenu} />
      )}
      {isUpdateMenu && (
        <DetailUpdateMenuModal
          closeUpdateMenuModal={closeUpdateMenuModal}
          menuData={menuData}
        />
      )}
      {isUpdateSale && (
        <DetailUpdateSaleModal closeUpdateSaleModal={closeUpdateSaleModal} />
      )}
      <div className="update">가게 정보 업데이트 날짜: 2023-02-23</div>
      <div className="title">
        <img src="" alt="" />
        📌 가게 정보
      </div>
      <div className="hashTags">
        <div className="hashTag">#{restaurantData.foodCategory}</div>
        <div className="hashTag">#{restaurantData.locationCategory}</div>
        <div className="hashTag">#{restaurantData.locationTag}</div>
      </div>
      {restaurantData.recommendCategoryList.map((recom) => (
        <div key={recom} className="recomCat">
          # {recom}
        </div>
      ))}

      <div className="help">
        <img className="helpImg" src={smileIcon} alt="" />
        <div className="helpText">
          메뉴 옆의 <span className="bold">카메라 버튼</span>을 누르면 메뉴
          사진을 볼 수 있어요. 세일 메뉴의{' '}
          <span className="bold">가격을 클릭</span>하면 세일 정보를 볼 수
          있습니다.
        </div>
      </div>
      <div className="menu">
        <div className="menuTop">
          <div className="menuTitle">📌 메뉴</div>
          <div
            className="menuUpdate"
            onClick={() => openUpdateMenuModal()}
            aria-hidden="true"
          >
            메뉴판 수정하기
          </div>
        </div>
        <ul className="menuUl">
          {menuData.map((menu) => (
            <li key={menu.id} className="menuLi" aria-hidden="true">
              <div className="menuLiInner">
                <div className="menuName">{menu.name}</div>
                <button
                  type="button"
                  className="menuPhotoBtn"
                  onClick={() => openMenuModal(menu)}
                >
                  <img src={cameraIcon} alt="" className="" />
                  {menu.photoNum}
                </button>
                {/* <div className="menuPhotoNum">사진보기{menu.photoNum}</div> */}
                {menu.salePrice ? (
                  <>
                    <div className="saleTag">sale</div>
                    <button type="button" className="salePrice">
                      {convertNum(menu.salePrice)}원
                    </button>
                  </>
                ) : (
                  <div className="menuPrice">{convertNum(menu.price)}원</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="sale">
        <div className="saleTop">
          <div className="saleTitle">세일 정보</div>
          <div
            className="saleUpdate"
            onClick={() => openUpdateSaleModal()}
            aria-hidden="true"
          >
            세일정보 수정하기
          </div>
        </div>
        <ul className="saleUl">
          <li className="saleLi">{'<개강 세일>'}</li>
        </ul>
      </div> */}
    </DetailInfoContainer>
  );
};

export default DetailInfo;
