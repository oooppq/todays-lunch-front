import styled from 'styled-components';

export const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding-top: 105px;
  max-width: 390px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const LoginBodyContainer = styled.div`
  .loginLogoAndTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginLogo {
      width: 100px;
      height: 110px;
    }
    .loginTitle {
      margin-top: 11px;
      font-family: Pretendard-Bold;
      font-size: 24px;
    }
  }
  .loginInputContainer {
    margin: 13px 36px 0 36px;
    .inputLabel {
      font-size: 16px;
    }
    .input {
      box-sizing: border-box;
      margin: 9px 0 16px 0;
      width: 100%;
      height: 45px;
      background-color: #f4f4f4;
      color: #707070;
      border: 1px solid #e3e3e3;
      border-radius: 3px;
      padding-left: 12px;
    }
    .loginBtn {
      margin-top: 19px;
      width: 100%;
      height: 45px;
      background-color: black;
      border-radius: 3px;
      font-family: Pretendard-SemiBold;
      font-size: 18px;
      color: white;
    }
  }
`;
export const LoginBottomContainer = styled.div`
  margin: 22px 36px 182px 36px;
  display: flex;
  flex-direction: column;

  .joinBtn {
    width: 100%;
    height: 45px;
    background-color: black;
    border-radius: 3px;
    font-family: Pretendard-SemiBold;
    font-size: 18px;
    color: white;
  }
  .findPasswordBtn {
    margin-top: 24px;
    margin-left: auto;
    font-family: Pretendard-Medium;
    font-size: 16px;
    color: #363636;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const FindPasswordModalContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  .modalInner {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 354px;
    height: 521px;
    background-color: white;
    border-radius: 10px;
    .closeBtn {
      position: absolute;
      top: 16px;
      right: 18px;
    }
  }
`;
