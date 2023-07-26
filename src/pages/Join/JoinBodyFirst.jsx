/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useInputValidation, useWarningHandler } from './join.helpers';
import { JoinBodyFirstContainer } from './join.style';
import JoinWarningMessage from './JoinWarningMessage';
import EmailValidationMessage from './EmailValidationMessage';

const JoinBodyFirst = ({
  email,
  emailValidationRequest,
  varificationCode,
  codeReset,
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

  const [isValidation, setIsValidation] = useState(false);
  const [validationStatus, setValidationStatus] = useState('sent');
  const [isEmailChanged, setIsEmailChanged] = useState(false);
  const [notValidatedError, setNotValidatedError] = useState(false);
  useEffect(() => {
    if (validationStatus === 'success') {
      setNotValidatedError(false);
    }
  }, [validationStatus, setNotValidatedError]);

  const codeRef = useRef();

  return (
    <JoinBodyFirstContainer>
      <div className="label emailLabel">
        이메일{' '}
        {notValidatedError && (
          <span
            className=""
            style={{ color: 'rgb(202, 45, 24)', fontSize: '12px' }}
          >
            ⚠️ 이메일 인증을 완료해주세요.
          </span>
        )}
      </div>
      <div className="email emailOuter">
        <input
          type="text"
          className="input emailInput"
          placeholder="example@example.com"
          onChange={(e) => {
            handleEmailChange(e);
            setIsValidation(false);
            setIsEmailChanged(true);
          }}
          onBlur={(event) => {
            setEmailWarning(!checkEmail(event.target.value));
          }}
        />
        <button
          type="button"
          className="checkBtn"
          onClick={() => {
            if (email && !emailWarning && isEmailChanged) {
              codeReset();
              emailValidationRequest();
              setValidationStatus('sent');
              setIsValidation(true);
              setIsEmailChanged(false);
            }
          }}
        >
          확인
        </button>
      </div>
      {isValidation && (
        <div className="validationOuter">
          <div className="validation">
            <input
              type="text"
              className="validationInput"
              ref={codeRef}
              disabled={validationStatus === 'success' && true}
            />
            <button
              type="button"
              className="validationBtn"
              onClick={() => {
                if (codeRef.current.value === varificationCode) {
                  setValidationStatus('success');
                } else {
                  setValidationStatus('fail');
                }
              }}
            >
              인증
            </button>
            <button
              type="button"
              className="validationBtn againBtn"
              onClick={() => {
                if (email && !emailWarning) {
                  codeReset();
                  emailValidationRequest();
                  setValidationStatus('sent');
                }
              }}
            >
              재전송
            </button>
          </div>
          <EmailValidationMessage validationStatus={validationStatus} />
        </div>
      )}

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
          if (checkAllForFirst(email, nickName, password, passwordConfirm)) {
            if (validationStatus === 'success') goToNextStage();
            else {
              setNotValidatedError(true);
            }
          } else {
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
