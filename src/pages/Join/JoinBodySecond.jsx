import React from 'react';
import { JoinBodySecondContainer } from './join.style';
import plusIcon from '../../assets/img/plus-icon.svg';
import JoinDropdown from './JoinDropdown';

const JoinBodySecond = () => {
  return (
    <JoinBodySecondContainer>
      <div className="locCatLabel">활동 영역</div>
      <JoinDropdown />
      <button type="button" className="newLocCatBtn">
        <img src={plusIcon} alt="" className="" />
      </button>
      <div className="foodCatLabel">좋아하는 음식 종류</div>
      <JoinDropdown />
      <button type="button" className="newFoodCatBtn">
        <img src={plusIcon} alt="" className="" />
      </button>
      <button type="button" className="registerBtn">
        회원가입
      </button>
    </JoinBodySecondContainer>
  );
};

export default JoinBodySecond;
