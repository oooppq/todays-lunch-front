import React from 'react';
import { JoinDropdownContainer } from './join.style';

const JoinDropdown = () => {
  return (
    <JoinDropdownContainer>
      <button type="button" className="btn selectedLabel">
        <span>선택해주세요</span>
        <span className="triangle">▼</span>
      </button>
      <div className="optionContainer">
        <ul className="optionUl">
          <li className="optionLi">서강대학교</li>
          <li className="optionLi">연세대학교</li>
          <li className="optionLi">이화여자대학교</li>
        </ul>
      </div>
    </JoinDropdownContainer>
  );
};

export default JoinDropdown;
