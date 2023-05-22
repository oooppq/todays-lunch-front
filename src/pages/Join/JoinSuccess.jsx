/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomNavigate } from '../../libs/common.helpers';
import { JoinSuccessContainer } from './join.style';

const JoinSuccess = ({ nickName, email, status, error }) => {
  const { goToHomePage } = useCustomNavigate(useNavigate());

  if (status === 'loading') return null;
  return (
    <JoinSuccessContainer>
      <div className="successContent">
        {error ? (
          <div className="">
            죄송합니다. <br />
            회원가입 과정에서 오류가 발생했습니다.
          </div>
        ) : (
          <>
            <span className="userName">{nickName}</span>님, 안녕하세요! <br />
            회원가입이 성공적으로 완료 되었습니다. <br />
            가입하신 이메일(<span className="email colored">{email}</span>)로
            인증 메일을 발송했습니다. <br />
            이메일 인증을 완료해야 비밀번호 찾기 기능을 이용하실 수 있습니다.
          </>
        )}
      </div>
      <button type="button" className="gotoHomeBtn" onClick={goToHomePage}>
        홈 화면으로 돌아가기
      </button>
    </JoinSuccessContainer>
  );
};

export default JoinSuccess;
