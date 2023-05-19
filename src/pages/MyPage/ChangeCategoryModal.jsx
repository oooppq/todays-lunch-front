/* eslint-disable react/prop-types */
import React from 'react';
import { ChangeCategoryModalContainer } from './myPage.style';
import xIcon from '../../assets/img/x-icon.svg';
import deleteIcon from '../../assets/img/delete-icon.svg';
import plusIcon from '../../assets/img/circle-plus-icon.png';
import { useCategoryChange } from './myPage.helpers';

const ChangeCategoryModal = ({
  category,
  userInfo,
  setIsCategoryChanging,
  setIsCategoryModalOpen,
  title,
}) => {
  const {
    selectedCategoryList,
    unSelectedCategoryList,
    addCategory,
    deleteCategory,
    handleCategoryChange,
  } = useCategoryChange(
    category,
    category === 'food'
      ? userInfo.foodCategoryList
      : userInfo.locationCategoryList,
    setIsCategoryChanging,
    setIsCategoryModalOpen
  );

  return (
    <ChangeCategoryModalContainer>
      <div className="modalInner">
        <div className="modalTop">
          <div className="modalTitle">{title} 수정</div>
          <button
            type="button"
            className="xBtn"
            onClick={() => {
              setIsCategoryModalOpen(false);
            }}
          >
            <img src={xIcon} alt="" className="" />
          </button>
        </div>
        <div className="categoryOuter">
          <div className="categoryOuterTitle">
            📌 <span className="nickname">{userInfo.nickname}님</span>의 {title}
          </div>
          <ul className="currentCategoryUl">
            {selectedCategoryList.map((foodCat) => (
              <li key={foodCat.id} className="currentCategoryLi">
                <div className="currentCategoryTitle">{foodCat.name}</div>
                <button
                  type="button"
                  className="deleteBtn"
                  onClick={() => {
                    deleteCategory(foodCat);
                  }}
                >
                  <img src={deleteIcon} alt="" className="deleteIcon" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="categoryOuter">
          <div className="categoryOuterTitle">📌 새롭게 추가할 {title}</div>
          <ul className="newCategoryUl">
            {unSelectedCategoryList.map((foodCat) => (
              <li key={foodCat.id} className="newCategoryLi">
                <div className="categoryTitle">{foodCat.name}</div>
                <button
                  type="button"
                  className="plusBtn"
                  onClick={() => {
                    addCategory(foodCat);
                  }}
                >
                  <img src={plusIcon} alt="" className="plusIcon" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="changeBtn"
          onClick={handleCategoryChange}
        >
          확인
        </button>
      </div>
    </ChangeCategoryModalContainer>
  );
};

export default ChangeCategoryModal;
