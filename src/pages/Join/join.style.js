import styled from 'styled-components';

export const JoinContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding-top: 105px;
  max-width: 390px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  .joinLogoAndTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    .joinLogo {
      width: 100px;
      height: 110px;
    }
    .joinTitle {
      margin-top: 11px;
      font-family: Pretendard-Bold;
      font-size: 24px;
    }
  }
`;

export const JoinBodyFirstContainer = styled.div`
  margin: 13px 36px 0 36px;
  display: flex;
  flex-direction: column;
  .label {
    font-size: 16px;
  }
  .input {
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    margin: 9px 0 16px 0;
    background-color: #f4f4f4;
    border: 1px solid #e3e3e3;
    padding-left: 12px;
    font-size: 17px;
    color: #707070;
  }
  .input::placeholder {
    color: #cdcdcd;
  }
  .nextStageBtn {
    margin-top: 19px;
    width: 100%;
    height: 45px;
    background-color: black;
    color: white;
    font-family: Pretendard-SemiBold;
    font-size: 18px;
  }
`;

export const JoinBodySecondContainer = styled.div`
  margin: 13px 36px 0 36px;
  display: flex;
  flex-direction: column;
  .label {
    font-size: 16px;
  }

  .registerBtn {
    margin-top: 41px;
    width: 100%;
    height: 45px;
    background-color: black;
    color: white;
    font-family: Pretendard-SemiBold;
    font-size: 18px;
  }
`;

export const JoinDropdownContainer = styled.div`
  .btn {
    display: flex;
    align-items: center;
    margin: 9px 0 12px 0;
    padding: 0 15px 0 12px;
    width: 100%;
    height: 45px;
    background-color: #f4f4f4;
    border: 1px solid #e3e3e3;
    text-align: left;
    font-family: Pretendard-Medium;
    font-size: 17px;
    color: #cdcdcd;
    .triangle {
      color: #c2c2c2;
      margin-left: auto;
    }
  }

  .optionContainer {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    font-size: 13px;
    z-index: 99;
    .optionUl {
      box-sizing: border-box;
      max-width: 390px;
      width: 100%;
      height: 364px;
      list-style: none;
      margin: 0;
      padding: 32px 0 0 0;
      background-color: white;
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
      overflow: auto;

      .optionLi {
        font-family: Pretendard-Medium;
        font-size: 19px;
        margin: 0 34px;
        padding: 20px 12px;
        border-bottom: 1px solid #eaeaea;
        color: #9a9a9a;
      }
    }
  }
`;
