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
