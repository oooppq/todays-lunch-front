/* eslint-disable react/prop-types */
import React from 'react';
import { JoinBodyFirstContainer } from './join.style';

const JoinBodyFirst = ({
  email,
  nickName,
  password,
  passwordConfirm,
  handleEmailChange,
  handleNickNameChange,
  handlePasswordChange,
  handlePasswordConfirmChange,
  checkPassword,
  goToNextStage,
}) => {
  return (
    <JoinBodyFirstContainer>
      <div className="label emailLabel">이메일</div>
      <input
        type="text"
        className="input"
        placeholder="email"
        onChange={handleEmailChange}
      />
      <div className="label nicknameLabel">닉네임</div>
      <input
        type="text"
        className="input"
        placeholder="nickname"
        onChange={handleNickNameChange}
      />
      <div className="label passwordLabel">비밀번호</div>
      <input
        type="password"
        className="input"
        placeholder="password"
        onChange={handlePasswordChange}
      />
      <div className="label passwordCheckLabel">비밀번호 확인</div>
      <input
        type="password"
        className="input"
        placeholder="confirm password"
        onChange={handlePasswordConfirmChange}
      />
      <button
        type="button"
        className="nextStageBtn"
        onClick={() => {
          if (
            email &&
            nickName &&
            password &&
            passwordConfirm &&
            checkPassword()
          )
            goToNextStage();
        }}
      >
        다음 단계
      </button>
    </JoinBodyFirstContainer>
  );
};

export default JoinBodyFirst;
