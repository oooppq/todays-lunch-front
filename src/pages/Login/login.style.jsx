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
  .loginState {
    margin: 10px 0;
    height: 12px;
    font-size: 12px;
    color: #ca2d18;
  }
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
      margin-left: 7px;
    }
    .input {
      box-sizing: border-box;
      margin-top: 9px;
      width: 100%;
      height: 45px;
      background-color: #f4f4f4;
      color: #707070;
      border: 1px solid #e3e3e3;
      border-radius: 3px;
      padding-left: 12px;
    }
    .emailInput {
      margin-bottom: 16px;
    }
    .loginBtn {
      // margin-top: 19px;
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
    // padding-bottom: 30px;
    box-sizing: border-box;
    padding: 16px 16px 30px 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 354px;
    min-height: 250px;
    background-color: white;
    border-radius: 10px;
    .closeBtn {
      position: absolute;
      top: 16px;
      right: 18px;
    }
    .title {
      margin-left: 2px;
      font-size: 20px;
      font-family: Pretendard-SemiBold;
    }
    .main {
      margin-top: 30px;
      text-align: center;
      .explain {
        line-height: 24px;
      }
      .emailInputOuter {
        margin: 30px 15px 0 15px;

        display: flex;
        .emailInput {
          box-sizing: border-box;

          flex-grow: 2;
          height: 45px;
          background-color: #f4f4f4;
          color: #707070;
          border: 1px solid #e3e3e3;
          border-radius: 3px;
          padding-left: 12px;
        }
        .sendBtn {
          margin-left: 5px;
          width: 60px;
          font-size: 16px;
          font-family: Pretendard-SemiBold;
          background-color: #6ab2b2;
          border-radius: 3px;
          color: white;
        }
      }
    }
    .success {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
      margin-top: 20px;
      .successExplain {
        text-align: center;
        line-height: 28px;
        font-size: 15px;
        margin-bottom: 20px;
      }
      .btns {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: end;
        .okBtn {
          margin-left: 50%;
          transform: translate(-50%, 0);

          // margin-top: auto;
          width: 80px;
          height: 40px;
          font-size: 16px;
          font-family: Pretendard-SemiBold;
          background-color: black;
          border-radius: 3px;
          color: white;
        }
        .againBtn {
          color: #707070;
          margin-left: -30px;
          padding-bottom: 2px;
          margin-bottom: 5px;
          // margin-left: 10px;
          border-bottom: 1px solid #707070;
        }
      }
    }
    .warning {
      margin: 10px 0 0 20px;
      font-size: 13px;
      color: rgb(202, 45, 24);
    }
  }
`;
