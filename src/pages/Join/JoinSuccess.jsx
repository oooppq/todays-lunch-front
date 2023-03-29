import React from 'react';
import { JoinSuccessContainer } from './join.style';

const JoinSuccess = () => {
  return (
    <JoinSuccessContainer>
      <div className="successContent">
        <div className="contentTop">
          <span className="userName">알바트로스</span>님, 안녕하세요!
        </div>
        <div className="contentBottom">
          회원가입이 성공적으로 완료 되었습니다.
        </div>
      </div>
      <button type="button" className="gotoHomeBtn">
        홈 화면으로 돌아가기
      </button>
    </JoinSuccessContainer>
  );
};

export default JoinSuccess;
