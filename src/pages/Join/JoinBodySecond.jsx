import React from 'react';
import { JoinBodySecondContainer } from './join.style';
import plusIcon from '../../assets/img/plus-icon.svg';
import Dropdown from '../../components/Dropdown';

const dropdownStyle = `
  margin: 9px 0 12px 0;
  .selectedLabel {
    height: 45px;
    width: 100%;
    font-size: 17px;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    background-color: #f4f4f4;
    padding: 0 12px;
    color: #7c7c7c;
    font-family: Pretendard-Medium;
    .triangle {
      right: 15px;
      color: #c2c2c2;
    }
  }
`;

const JoinBodySecond = () => {
  return (
    <JoinBodySecondContainer>
      <div className="label">활동 영역</div>
      <Dropdown style={dropdownStyle} />
      <button type="button" className="newLocCatBtn">
        <img src={plusIcon} alt="" className="" />
      </button>
      <div className="lavel">좋아하는 음식 종류</div>
      <Dropdown style={dropdownStyle} />
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
