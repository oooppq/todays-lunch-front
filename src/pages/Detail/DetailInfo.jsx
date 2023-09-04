/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailInfoContainer } from './detail.style';
import smileIcon from '../../assets/img/smile-icon.svg';
import pencilIcon from '../../assets/img/detail-pencil-icon.svg';
import DetailMenuElement from './DetailMenuElement';
import RecommendTagFetchModal from './RecommendTagFetchModal';
import { useAuth } from '../../libs/userAuth.helpers';

const DetailInfo = ({
  restaurantData,
  menuData,
  openNewMenuModal,
  useMenuElem,
}) => {
  const navigate = useNavigate();
  const [isMore, setIsMore] = useState(false);
  const [isRecomTagOpen, setIsRecomTagOpen] = useState(false);
  const { isAuthorized } = useAuth();

  const openRecomTagModal = () => {
    if (isAuthorized()) {
      setIsRecomTagOpen(true);
    } else {
      navigate('/login');
    }
  };
  return (
    <DetailInfoContainer>
      <div className="update">
        가게 정보 업데이트 날짜: {restaurantData.updatedDate}
      </div>
      <div className="title">
        <img src="" alt="" />
        📌 가게 정보
      </div>
      <div className="infos">
        <div className="info">
          <div className="key">음식 종류</div>
          <div className="value">{restaurantData.foodCategory}</div>
        </div>
        <div className="info">
          <div className="key">위치</div>
          <div className="value">
            {restaurantData.locationCategory} {'>'} {restaurantData.locationTag}
          </div>
        </div>
        <div
          className="info"
          onClick={() => {
            setIsMore((state) => !state);
          }}
        >
          <div className="key">추천 태그</div>
          <div className="value">
            <div className="recom">
              {restaurantData.recommendCategoryList.length > 0 ? (
                <div
                  className="recomTag"
                  style={{
                    borderColor: restaurantData.recommendCategoryList[0].color,
                  }}
                >
                  <span
                    className="hash"
                    style={{
                      color: restaurantData.recommendCategoryList[0].color,
                    }}
                  >
                    #{' '}
                  </span>
                  {restaurantData.recommendCategoryList[0].name}
                </div>
              ) : (
                <div className="">추천 태그를 추가해주세요.</div>
              )}
              {restaurantData.recommendCategoryList.length > 1 && (
                <button type="button" className="etc">
                  <span className="">
                    외 {restaurantData.recommendCategoryList.length - 1}개
                  </span>
                  {/* <img src={detailIcon} alt="" className="" /> */}
                  <span className="moreBtn">{isMore ? '▲' : '▼'}</span>
                </button>
              )}
            </div>
            {isMore &&
              restaurantData.recommendCategoryList.slice(1).map((tag) => (
                <div
                  key={tag.id}
                  className="recomTag more"
                  style={{
                    borderColor: tag.color,
                  }}
                >
                  <span
                    className="hash"
                    style={{
                      color: tag.color,
                    }}
                  >
                    #
                  </span>{' '}
                  {tag.name}
                </div>
              ))}
          </div>
          <button
            type="button"
            className="recomTagChangeBtn"
            onClick={(e) => {
              openRecomTagModal();
              e.stopPropagation();
            }}
          >
            <img src={pencilIcon} alt="" className="" />
          </button>
        </div>
      </div>
      {isRecomTagOpen && (
        <RecommendTagFetchModal
          closeModal={() => {
            setIsRecomTagOpen(false);
          }}
          restId={restaurantData.id}
          recommendTag={restaurantData.recommendCategoryList}
        />
      )}

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
              openNewMenuModal(navigate);
            }}
          >
            메뉴 추가 +
          </button>
        </div>
        <ul className="menuUl">
          {menuData &&
            menuData.map((menu) => (
              <DetailMenuElement
                key={menu.id}
                menu={menu}
                useMenuElem={useMenuElem}
              />
            ))}
        </ul>
      </div>
    </DetailInfoContainer>
  );
};

export default DetailInfo;
