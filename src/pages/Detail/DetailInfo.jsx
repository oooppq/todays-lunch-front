/* eslint-disable react/prop-types */
import React from 'react';
import { DetailInfoContainer } from './detail.style';
import smileIcon from '../../assets/img/smile-icon.svg';
import cameraIcon from '../../assets/img/colored-camera-icon.svg';
import pencilIcon from '../../assets/img/detail-pencil-icon.svg';
import { convertNum } from '../../libs/utils';

const DetailInfo = ({
  restaurantData,
  menuData,
  openMenuPhotoModal,
  openMenuUpdateModal,
  openMenuSaleInfoModal,
}) => {
  return (
    <DetailInfoContainer>
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
          - 메뉴 옆의 <span className="bold">카메라 버튼</span>을 누르면 메뉴
          사진을 볼 수 있어요. <br />- 세일 메뉴의{' '}
          <span className="bold">가격을 클릭</span>하면 세일 정보를 볼 수
          있어요. <br />- <span className="bold">연필버튼</span>을 클릭하여
          메뉴를 수정할 수 있어요.
        </div>
      </div>
      <div className="menu">
        <div className="menuTop">
          <div className="menuTitle">📌 메뉴</div>
          <button
            type="button"
            className="addMenuBtn"
            onClick={() => {
              openMenuUpdateModal();
            }}
          >
            메뉴 추가 +
          </button>
        </div>
        <ul className="menuUl">
          {menuData.map((menu) => (
            <li key={menu.id} className="menuLi" aria-hidden="true">
              <div className="menuLiInner">
                <div className="menuName">{menu.name}</div>
                <button
                  type="button"
                  className="menuPhotoBtn"
                  onClick={() => {
                    openMenuPhotoModal(menu);
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
                      openMenuSaleInfoModal(menu);
                    }}
                  >
                    <div className="saleTag">sale</div>
                    <div className="salePrice">
                      {convertNum(menu.salePrice)}원
                    </div>
                  </button>
                ) : (
                  <div className="menuPrice">{convertNum(menu.price)}원</div>
                )}
                <button
                  type="button"
                  className="changeBtn"
                  onClick={() => {
                    openMenuUpdateModal(menu);
                  }}
                >
                  <img src={pencilIcon} alt="" className="" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DetailInfoContainer>
  );
};

export default DetailInfo;
