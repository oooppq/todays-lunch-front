/* eslint-disable react/prop-types */
import React from 'react';
import { useInputValidation, useWarningHandler } from './join.helpers';
import { JoinBodyFirstContainer } from './join.style';
import JoinWarningMessage from './JoinWarningMessage';

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
        placeholder="example@example.com"
        onChange={handleEmailChange}
        onBlur={(event) => {
          setEmailWarning(!checkEmail(event.target.value));
        }}
      />
      <JoinWarningMessage
        flag={emailWarning}
        message="이메일을 확인해주세요."
      />
      <div className="labelOuter">
        <div className="label nicknameLabel">닉네임</div>
        <div className="inputRule">(한글,영문,숫자로 이루어진 1~7자리)</div>
      </div>
      <input
        type="text"
        className="input"
        placeholder="nickname"
        onChange={handleNickNameChange}
        onBlur={(event) => {
          setNickNameWarning(!checkNickName(event.target.value));
        }}
      />
      <JoinWarningMessage
        flag={nickNameWarning}
        message="닉네임을 확인해주세요."
      />
      <div className="labelOuter">
        <div className="label passwordLabel">비밀번호</div>
        <div className="inputRule">
          (영문 대소문자, 숫자, 특수문자가 1개 이상씩 포함된 8~16자리)
        </div>
      </div>
      <input
        type="password"
        className="input"
        placeholder="password"
        onChange={handlePasswordChange}
        onBlur={(event) => {
          setPasswordWarning(!checkPassword(event.target.value));
        }}
      />
      <JoinWarningMessage
        flag={passwordWarning}
        message="비밀번호를 확인해주세요."
      />
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
      <JoinWarningMessage
        flag={passwordConfirmWarning}
        message="입력된 비밀번호와 다릅니다."
      />
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
