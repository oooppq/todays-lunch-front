/* eslint-disable react/prop-types */
import React from 'react';
import { ChangeCategoryModalContainer } from './myPage.style';
import xIcon from '../../assets/img/x-icon.svg';
import deleteIcon from '../../assets/img/delete-icon.svg';
import plusIcon from '../../assets/img/circle-plus-icon.png';

const ChangeCategoryModal = ({ userInfo, title }) => {
  return (
    <ChangeCategoryModalContainer>
      <div className="modalInner">
        <div className="modalTop">
          <div className="modalTitle">{title} 수정</div>
          <button type="button" className="xBtn">
            <img src={xIcon} alt="" className="" />
          </button>
        </div>
        <div className="categoryOuter">
          <div className="categoryOuterTitle">
            📌 <span className="nickname">{userInfo.nickname}님</span>의 {title}
          </div>
          <ul className="currentCategoryUl">
            <li className="currentCategoryLi">
              <div className="currentCategoryTitle">서강대학교</div>
              <button type="button" className="deleteBtn">
                <img src={deleteIcon} alt="" className="deleteIcon" />
              </button>
            </li>
            <li className="currentCategoryLi">
              <div className="currentCategoryTitle">서강대학교</div>
              <button type="button" className="deleteBtn">
                <img src={deleteIcon} alt="" className="deleteIcon" />
              </button>
            </li>
            <li className="currentCategoryLi">
              <div className="currentCategoryTitle">서</div>
              <button type="button" className="deleteBtn">
                <img src={deleteIcon} alt="" className="deleteIcon" />
              </button>
            </li>
            <li className="currentCategoryLi">
              <div className="currentCategoryTitle">서강대학교</div>
              <button type="button" className="deleteBtn">
                <img src={deleteIcon} alt="" className="deleteIcon" />
              </button>
            </li>
            <li className="currentCategoryLi">
              <div className="currentCategoryTitle">서</div>
              <button type="button" className="deleteBtn">
                <img src={deleteIcon} alt="" className="deleteIcon" />
              </button>
            </li>
          </ul>
        </div>
        <div className="categoryOuter">
          <div className="categoryOuterTitle">📌 새롭게 추가할 {title}</div>
          <ul className="newCategoryUl">
            <li className="newCategoryLi">
              <div className="categoryTitle">서강대학교</div>
              <button type="button" className="plusBtn">
                <img src={plusIcon} alt="" className="plusIcon" />
              </button>
            </li>
          </ul>
        </div>
        <button type="button" className="changeBtn">
          확인
        </button>
      </div>
    </ChangeCategoryModalContainer>
  );
};

export default ChangeCategoryModal;
