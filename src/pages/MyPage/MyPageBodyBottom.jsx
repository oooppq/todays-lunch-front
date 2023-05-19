/* eslint-disable react/prop-types */
import React from 'react';
import { MyPageMid } from './myPage.style';
import smileIcon from '../../assets/img/smile-icon.svg';
import { useCategoryChangeModal } from './myPage.helpers';
import Loading from './Loading';
import ChangeCategoryModal from './ChangeCategoryModal';

const MyPageBodyBottom = ({ userInfo }) => {
  const {
    isCategoryChanging,
    setIsCategoryChanging,
    isLocCatModalOpen,
    setIsLocCatModalOpen,
    isFoodCatModalOpen,
    setIsFoodCatModalOpen,
  } = useCategoryChangeModal();

  return (
    <MyPageMid>
      <div className="explanationOuter">
        <img src={smileIcon} alt="" className="smileIcon" />
        <div className="explanation">
          <span className="bold">활동 영역</span>과 좋아하는{' '}
          <span className="bold">음식 종류</span>를 기준으로 맛집이 메인
          화면에서 추천됩니다.
        </div>
      </div>
      <div className="categoryOuter">
        <div className="categoryTitle">
          📌 <span>알바트로스</span>님의 활동 영역
        </div>
        <div className="categoryBody">
          <div className="categorySubTitle">위치</div>
          <div className="categories">
            {userInfo.locationCategoryList.map((loc) => (
              <div key={loc.name} className="category">
                {loc.name}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="changeBtn"
            onClick={() => {
              setIsLocCatModalOpen(true);
            }}
          >
            수정하기
          </button>
        </div>
      </div>
      <div className="categoryOuter">
        <div className="categoryTitle">
          📌 <span>알바트로스</span>님이 좋아하는 음식 종류
        </div>
        <div className="categoryBody">
          <div className="categorySubTitle">음식 종류</div>
          <div className="categories">
            {userInfo.foodCategoryList.map((food) => (
              <div key={food.name} className="category">
                {food.name}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="changeBtn"
            onClick={() => {
              setIsFoodCatModalOpen(true);
            }}
          >
            수정하기
          </button>
        </div>
      </div>
      {isCategoryChanging ? <Loading /> : null}
      {isFoodCatModalOpen ? (
        <ChangeCategoryModal
          category="food"
          userInfo={userInfo}
          setIsCategoryChanging={setIsCategoryChanging}
          setIsCategoryModalOpen={setIsFoodCatModalOpen}
          title="선호하는 음식 종류"
        />
      ) : null}
      {isLocCatModalOpen ? (
        <ChangeCategoryModal
          category="location"
          userInfo={userInfo}
          setIsCategoryChanging={setIsCategoryChanging}
          setIsCategoryModalOpen={setIsLocCatModalOpen}
          title="관심지역"
        />
      ) : null}
    </MyPageMid>
  );
};

export default MyPageBodyBottom;
