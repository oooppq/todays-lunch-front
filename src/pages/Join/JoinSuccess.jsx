/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomNavigate } from '../../libs/common.helpers';
import { JoinSuccessContainer } from './join.style';

const JoinSuccess = ({ nickName, status, error }) => {
  const { goToHomePage } = useCustomNavigate(useNavigate());

  if (status === 'loading' && error) return null;
  return (
    <JoinSuccessContainer>
      <div className="successContent">
        <div className="contentTop">
          <span className="userName">{nickName}</span>님, 안녕하세요!
        </div>
        <div className="contentBottom">
          회원가입이 성공적으로 완료 되었습니다.
        </div>
      </div>
      <button type="button" className="gotoHomeBtn" onClick={goToHomePage}>
        홈 화면으로 돌아가기
      </button>
    </JoinSuccessContainer>
  );
};

export default JoinSuccess;
