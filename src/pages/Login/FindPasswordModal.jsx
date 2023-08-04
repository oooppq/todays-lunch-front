/* eslint-disable react/prop-types */
import React from 'react';
import { FindPasswordModalContainer } from './login.style';
import xIcon from '../../assets/img/x-icon.svg';
import { useFindPassword } from './login.helpers';

const SendingSuccess = ({ closeFindPassword, email }) => {
  return (
    <div className="success">
      <div className="successExplain">
        입력하신 이메일[<span style={{ color: '#6ab2b2' }}>{email}</span>] 로
        임시 비밀번호를 발송해드렸습니다. <br />
        로그인하신 후, 즉시 비밀번호를 변경해주세요.
      </div>
      <div className="btns">
        <button type="button" className="okBtn" onClick={closeFindPassword}>
          확인
        </button>
        {/* <button type="button" className="againBtn">
          재전송
        </button> */}
      </div>
    </div>
  );
};
const Warning = ({ findPwState, states }) => {
  let message;
  if (findPwState === states.WRONG) message = '존재하지 않는 이메일입니다.';
  else if (findPwState === states.INVALID)
    message = '올바르지 않은 이메일 형식입니다.';
  else return null;

  return <div className="warning">{message}</div>;
};

const FindPasswordModal = ({ closeFindPassword }) => {
  const { emailRef, states, findPwState, email, findPasswordOnClick } =
    useFindPassword();

  return (
    <FindPasswordModalContainer>
      <div className="modalInner">
        <button className="closeBtn" type="button" onClick={closeFindPassword}>
          <img src={xIcon} alt="" />
        </button>
        <div className="title">비밀번호 찾기</div>
        {findPwState === states.SUCCESS ? (
          <SendingSuccess closeFindPassword={closeFindPassword} email={email} />
        ) : (
          <div className="main">
            <div className="explain">
              가입하신 이메일을 입력해주세요. <br />
              임시 비밀번호를 발송해드립니다.
            </div>
            <div className="emailInputOuter">
              <input
                type="text"
                className="emailInput"
                placeholder="example@example.com"
                ref={emailRef}
              />
              <button
                type="button"
                className="sendBtn"
                onClick={() => {
                  findPasswordOnClick(emailRef.current.value);
                }}
              >
                확인
              </button>
            </div>
          </div>
        )}

        <Warning findPwState={findPwState} states={states} />
      </div>
    </FindPasswordModalContainer>
  );
};

export default FindPasswordModal;
