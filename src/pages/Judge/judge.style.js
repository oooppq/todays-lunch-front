/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export const JudgeContainer = styled.div`
  margin: 29px;
`;

export const JudgeHeader = styled.div`
  height: 65px;
  display: flex;
  img {
    margin-right: 8.5px;
  }
  .announce {
    padding: 14px 20px;
    background-color: #f4f4f4;
    font-size: 14px;
    border-radius: 10px;
    line-height: 20px;
    color: #383838;
  }
`;
export const JudgeBody = styled.div`
  margin-top: 60px;
`;
export const JudgeBtn = styled.button`
  height: 112px;
  width: 100%;
  margin-bottom: 39px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  align-items: center;

  .pencil {
    margin: 0 29px 0 23px;
    height: 47px;
    width: 47px;
  }
  .thumb {
    height: 55px;
    width: 55px;
    margin: 0 21px 0 23px;
  }

  .infoTitle {
    font-size: 18px;
    font-family: Pretendard-Medium;
    padding-bottom: 10px;
    color: #525252;
  }
  .infoComment {
    font-size: 15px;
    color: #383838;
  }
`;

export const JudgeNewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const JudgeNewHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  font-family: Pretendard-SemiBold;
  font-size: 20px;
  width: 100%;
  padding: 29px 28px 17px 39px;
  border-bottom: 1px solid #ededed;
  justify-content: space-between;
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    padding: 0;
    height: 16px;
    img {
      height: 100%;
    }
  }
  .pageTitle {
  }
`;

export const OutModal = styled.div`
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
`;

export const OutModalInner = styled.div`
  position: relative;
  margin: 0 38px;
  width: 100%;
  height: 231px;
  border-radius: 17px;
  background-color: white;
  text-align: center;
  font-size: 18px;
  .outModalXBtn {
    position: absolute;
    top: 16px;
    right: 17px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    padding: 0;
    height: 16px;
    width: 16px;
  }
  .commentUp {
    margin-top: 43px;
    line-height: 21.48px;
  }
  .commentDown {
    margin-top: 16px;
  }
  .outModalBtns {
    margin-top: 24px;
    button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: black;
      color: white;
      border: 0;
      border-radius: 20px;
      padding: 0;
      width: 93.33px;
      height: 41px;
      font-size: 18px;
      font-family: Pretendard-SemiBold;
    }
    .yes {
      margin-right: 10.3px;
    }
    .no {
      margin-left: 10.3px;
    }
  }
`;

export const JudgeNewBody = styled.div`
  margin: 33px 39px 0 39px;
  width: auto;
  .bodyTitle {
    font-family: Pretendard-SemiBold;
    font-size: 18px;
    color: #494949;
  }
  .bodyBtn {
    margin: 13px 0 0 9px;
    padding: 0;
  }

  .search {
    height: 109px;
    .saerchBtn {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      background-color: transparent;
      height: 36px;
      width: 138.86px;
      display: flex;
      align-items: center;
      padding-left: 14px;
      padding-right: 15px;
      img {
        height: 18px;
        width: 18px;
        margin-right: 6px;
      }
      div {
        font-size: 14px;
        color: #7c7c7c;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }

  .category {
    width: 100%;
    height: 107px;
    .dropdowns {
      display: flex;
      margin-top: 15px;
      margin-left: 5px;
      height: 32px;
      justify-content: space-between;
    }
  }

  .photo {
    height: 168px;
    .photoInner {
      border: none;
      border-radius: 4px;
      background-color: #f4f4f4;
      position: relative;
      text-align: center;
      width: 95px;
      height: 95px;

      .xBtn {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-sizing: border-box;
        border: 1px solid #bdbdbd;
        border-radius: 50%;
        width: 23px;
        height: 23px;
        margin: 0;
        padding: 0;
        top: -10px;
        right: -10px;
        img {
          width: 7px;
          height: 7px;
        }
      }
      input {
        height: 95px;
        width: 95px;
        box-sizing: border-box;
        display: none;
      }
      .selected {
        height: 95px;
        width: 95px;
        border-radius: 4px;
      }
      .notSelected {
        position: absolute;
        top: 0;
        left: 0;

        padding: 26px 35px 45px 35px;
      }
      .fileNum {
        position: absolute;
        bottom: 25px;
        left: 21px;
        right: 21px;
        color: #707070;
        font-size: 14px;
      }
    }
  }

  .review {
    width: 100%;
    height: 214px;
    display: flex;
    flex-direction: column;
    textarea {
      width: auto;
      height: 137px;
      display: block;
      box-sizing: border-box;
      margin: 13px 3px 0 3px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      padding: 20px;
      resize: none;
    }
  }
  .warning {
    margin: 7px 0 0 4px;
    font-size: 12px;
    color: #ca2d18;
  }
`;

export const JudgeSearchContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;
export const JudgeSearchInner = styled.div`
  margin: 186px 18px 137px 18px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const JudgeSearchHeader = styled.div`
  display: flex;
  margin: 16px 17px 17px 21px;
  justify-content: space-between;
  .searchTitle {
    font-family: Pretendard-Medium;
    font-size: 18px;
  }
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    padding: 0;
  }
`;

export const JudgeSearchBox = styled.div`
  margin: 0 21px;
  display: flex;
  box-sizing: border-box;
  height: 40px;
  width: auto;
  border-radius: 20px;
  background-color: #f4f4f4;
  padding-right: 5px;
  input {
    height: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    padding-left: 20px;
    font-size: 16px;
  }
  input::placeholder {
    color: #b6b6b6;
  }
  input:focus {
    outline: none;
  }
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    margin: auto 5px;
    height: 23px;
    img {
      height: 100%;
    }
  }
`;
export const StyledMap = styled(Map)`
  margin-top: 21px;
  width: 100%;
  height: 170px;
  zindex: 1000;
`;
export const SearchDoneBtn = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 0;
  border-radius: 20px;
  background-color: black;
  color: white;
  left: 83px;
  right: 83px;
  bottom: 24.66px;
  height: 41px;
  font-family: Pretendard-SemiBold;
  font-size: 18px;
  position: absolute;
`;

export const DoneBtn = styled.button`
  // display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1;
  border: 0;
  border-radius: 20px;
  padding: 10px 0;
  margin: 0 38px;
  width: auto;
  height: 41px;
  color: white;
  background-color: black;
  font-family: Pretendard-SemiBold;
  font-size: 18px;
`;

export const JudgeSuccessContainer = styled.div`
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
`;

export const JudgeSuccessInner = styled.div`
  position: relative;
  margin: 0 38px;
  width: 100%;
  height: 323px;
  border-radius: 17px;
  background-color: white;
  text-align: center;
  font-size: 18px;
  .xBtn {
    position: absolute;
    top: 16px;
    right: 17px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    padding: 0;
    height: 16px;
    width: 16px;
  }
  .content {
    margin-top: 48px;
    line-height: 21.48px;
    img {
      height: 96.5px;
      width: 88px;
      margin: 11px 0 18.5px 0;
    }
  }
  .commentUp {
    margin-top: 43px;
    line-height: 21.48px;
  }
  .commentDown {
    margin-top: 16px;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;

    padding: 0;
  }
  .doneBtn {
    position: absolute;
    left: 63px;
    right: 63px;
    bottom: 23.66px;
    height: 41px;
    background-color: black;
    color: white;
    border-radius: 20px;

    font-size: 18px;
    font-family: Pretendard-SemiBold;
  }
`;
