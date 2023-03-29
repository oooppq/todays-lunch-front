import React from 'react';
import { JoinBodySecondContainer } from './join.style';
import plusIcon from '../../assets/img/plus-icon.svg';
import JoinDropdown from './JoinDropdown';

const JoinBodySecond = () => {
  return (
    <JoinBodySecondContainer>
      <div className="label">활동 영역</div>
      <JoinDropdown />
      <button type="button" className="newLocCatBtn">
        <img src={plusIcon} alt="" className="" />
      </button>
      <div className="lavel">좋아하는 음식 종류</div>
      <JoinDropdown />
      <button type="button" className="newFoodCatBtn">
        <img src={plusIcon} alt="" className="" />
      </button>
      <button type="button" className="btn registerBtn">
        회원가입
      </button>
    </JoinBodySecondContainer>
  );
};

export default JoinBodySecond;
