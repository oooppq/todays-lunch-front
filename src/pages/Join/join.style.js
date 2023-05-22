import styled from 'styled-components';

export const JoinContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding-top: 95px;
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
  .warning {
    font-size: 12px;
    color: #ca2d18;
    height: 15px;
    margin: 3px 0 6px 0;
  }
`;

export const JoinBodyFirstContainer = styled.div`
  margin: 13px 36px 0 36px;
  display: flex;
  flex-direction: column;
  .label {
    font-size: 16px;
  }
  .labelOuter {
    .inputRule {
      margin-top: 5px;
      font-size: 12px;
      color: #ff6020;
    }
  }
  .input {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin: 9px 0 0px 0;
    background-color: #f4f4f4;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
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
    height: 40px;
    border-radius: 3px;
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
    font-family: 'Pretendard-Medium';
  }
  .categoryUl {
    padding: 10px 0 0 0;
    margin: 0;
    list-style: none;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    .categoryLi {
      padding-right: 10px;
      display: flex;
      align-items: center;
      position: relative;
      .categoryName {
        height: 30px;
        box-sizing: border-box;
        padding: 6px 12px 0 12px;
        margin-right: 2px;
        background-color: #90c9c9;
        color: white;
        border-radius: 30px;
        font-size: 14px;
      }
      .deleteCategoryBtn {
        position: absolute;
        top: -5px;
        right: 5px;

        display: flex;

        align-items: center;
        justify-content: center;
        background-color: white;
        border: 1px solid black;
        border-radius: 50%;
        width: 15px;
        height: 15px;

        img {
          width: 7px;
          height: 7px;
        }
      }
    }
  }

  .registerBtn {
    margin-top: 41px;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    background-color: black;
    color: white;
    font-family: Pretendard-SemiBold;
    font-size: 18px;
  }
`;

export const JoinSuccessContainer = styled.div`
  margin: 38px 36px 0 36px;
  .successContent {
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    .userName,
    .email {
      font-family: Pretendard-SemiBold;
    }
    .colored {
      color: #6ab2b2;
    }
    .contentBottom {
      margin-top: 7px;
    }
  }

  .gotoHomeBtn {
    margin-top: 44px;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    background-color: black;
    color: white;
    font-family: Pretendard-SemiBold;
    font-size: 18px;
  }
`;
