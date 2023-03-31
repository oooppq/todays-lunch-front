/* eslint-disable react/prop-types */
import React from 'react';
import { useInputValidation, useWarningHandler } from './join.helpers';
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
  goToNextStage,
}) => {
  const {
    emailWarning,
    nickNameWarning,
    passwordWarning,
    passwordConfirmWarning,
    setEmailWarning,
    setNickNameWarning,
    setPasswordWarning,
    setPasswordConfirmWarning,
  } = useWarningHandler();
  const {
    checkEmail,
    checkNickName,
    checkPassword,
    checkPasswordConfirm,
    checkAllForFirst,
  } = useInputValidation();
  return (
    <JoinBodyFirstContainer>
      <div className="label emailLabel">이메일</div>
      <input
        type="text"
        className="input"
        placeholder="email"
        onChange={handleEmailChange}
        onBlur={(event) => {
          setEmailWarning(!checkEmail(event.target.value));
        }}
      />
      {emailWarning ? 'wrong email' : null}
      <div className="label nicknameLabel">닉네임</div>
      <input
        type="text"
        className="input"
        placeholder="nickname"
        onChange={handleNickNameChange}
        onBlur={(event) => {
          setNickNameWarning(!checkNickName(event.target.value));
        }}
      />
      {nickNameWarning ? 'wrong nickname' : null}
      <div className="label passwordLabel">비밀번호</div>
      <input
        type="password"
        className="input"
        placeholder="password"
        onChange={handlePasswordChange}
        onBlur={(event) => {
          setPasswordWarning(!checkPassword(event.target.value));
        }}
      />
      {passwordWarning ? 'wrong password' : null}
      <div className="label passwordCheckLabel">비밀번호 확인</div>
      <input
        type="password"
        className="input"
        placeholder="confirm password"
        onChange={handlePasswordConfirmChange}
        onBlur={(event) => {
          setPasswordConfirmWarning(
            !checkPasswordConfirm(password, event.target.value)
          );
        }}
      />
      {passwordConfirmWarning ? 'diff password' : null}
      <button
        type="button"
        className="nextStageBtn"
        onClick={() => {
          if (checkAllForFirst(email, nickName, password, passwordConfirm))
            goToNextStage();
          else {
            setEmailWarning(!checkEmail(email));
            setNickNameWarning(!checkNickName(nickName));
            setPasswordWarning(!checkPassword(password));
            setPasswordConfirmWarning(!checkPasswordConfirm(passwordConfirm));
          }
        }}
      >
        다음 단계
      </button>
    </JoinBodyFirstContainer>
  );
};

export default JoinBodyFirst;
