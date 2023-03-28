import React from 'react';
import { JoinBodyFirstContainer } from './join.style';

const JoinBodyFirst = () => {
  return (
    <JoinBodyFirstContainer>
      <div className="label emailLabel">이메일</div>
      <input type="text" className="input" placeholder="email" />
      <div className="label nicknameLabel">닉네임</div>
      <input type="text" className="input" placeholder="nickname" />
      <div className="label passwordLabel">비밀번호</div>
      <input type="password" className="input" placeholder="password" />
      <div className="label passwordCheckLabel">비밀번호 확인</div>
      <input type="password" className="input" placeholder="confirm password" />
      <button type="button" className="nextStageBtn">
        다음 단계
      </button>
    </JoinBodyFirstContainer>
  );
};

export default JoinBodyFirst;
