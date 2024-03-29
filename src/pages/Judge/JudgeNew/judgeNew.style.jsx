import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export const JudgeNewContainer = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  width: 100%;
  max-width: 390px;
  display: flex;
  flex-direction: column;
`;

export const JudgeNewHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  font-family: Pretendard-SemiBold;
  font-size: 20px;
  width: 100%;
  padding: 28px 28px 17px 39px;
  border-bottom: 1px solid #ededed;
  justify-content: space-between;
  button {
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
  width: 314px;
  height: 231px;
  margin-bottom: 23px;
  border-radius: 17px;
  background-color: white;
  text-align: center;
  font-size: 18px;
  .outModalXBtn {
    position: absolute;
    top: 16px;
    right: 17px;
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
  .titleOuter {
    display: flex;
    // align-items: center;
    .bodySubTitle {
      margin-top: 1px;
      margin-left: 3px;
      font-size: 12px;
      color: #ff6020;
    }
  }
  .bodyTitle {
    font-family: Pretendard-SemiBold;
    font-size: 18px;
    color: #494949;
    white-space: nowrap;
  }

  .bodyBtn {
    margin: 13px 0 0 9px;
    padding: 0;
  }

  .search {
    height: 109px;
    .searchBtnOuter {
      margin: 15px 0 0 5px;
      display: flex;
      align-items: center;
      .saerchBtn {
        // margin-left: 20px;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
        background-color: transparent;
        height: 32px;
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
          color: #616161;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .selectedLoc {
        height: 16px;
        margin-left: 10px;
        margin-top: 8px;
        font-size: 12px;
        color: #7a7a7a;
        display: flex;
        align-items: center;
        div {
          height: 16px;
        }
        .refreshBtn {
          margin-left: 2px;
          height: 100%;
          img {
            height: 12px;
            width: 12px;
          }
        }
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
    // height: 168px;
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
    margin-top: 30px;
    width: 100%;
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    textarea {
      width: auto;
      height: 137px;
      display: block;
      box-sizing: border-box;
      margin: 13px 3px 0 3px;
      border: 1px solid #d9d9d9;
      outline-color: #d9d9d9;
      border-radius: 4px;
      padding: 20px;
      resize: none;
    }
  }
`;

export const JudgeSearchContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;
export const JudgeSearchInner = styled.div`
  width: 354px;
  height: 637px;
  margin-bottom: 17px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const JudgeSearchHeader = styled.div`
  display: flex;

  margin: 19px 17px 8.5px 25px;
  justify-content: space-between;
  .searchTitle {
    // font-family: Pretendard-Medium;
    font-size: 19px;
    color: #6ab2b2;
  }
  button {
    border: 0;
    padding: 0;
  }
`;

export const JudgeSearchBox = styled.div`
  position: absolute;
  top: 65px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #dfdfdf;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: white;
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
    border: 0;
    margin: auto 5px;
    height: 23px;
    img {
      height: 100%;
    }
  }
`;
export const StyledMap = styled(Map)`
  position: relative;
  width: 100%;
  height: 587px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const CurrentLocationBtn = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 30px;
  right: 20px;
  z-index: 300;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 5px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const SelectedResultContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 192px;
  z-index: 999;
  box-shadow: 0 10px 70px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 10px;
  // border-bottom-left-radius: 10px;
  // border-bottom-right-radius: 10px;
`;

export const SelectedResult = styled.div`
  margin: 20px 30px 51px 20px;
  overflow: hidden;
  white-space: nowrap;
  z-index: 400;
  .placeName {
    font-size: 16px;
    line-height: 19.09px;
    margin-bottom: 4px;
  }
  .inputOuter {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    .placeNameInput {
      font-size: 16px;
      padding-bottom: 4px;
      border: none;
      border-bottom: 1px solid
        ${(props) =>
          props.isWarning ? 'rgb(202, 45, 24)' : 'rgb(124, 124, 124)'};
    }
    .placeNameInput::placeholder {
      ${(props) => props.isWarning && 'color:rgb(202, 45, 24);'}
    }
  }
  .address {
    margin-left: 1px;
    font-size: 13px;
    color: #636363;
    margin-bottom: 9px;
  }
  .detail {
    text-align: center;
    margin-left: 2px;
    padding: 3px 0 5px 0;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    box-sizing: border-box;
    width: 89px;
    height: 21px;
    display: block;
    font-size: 11px;
    a {
      text-decoration: none;
      color: #949494;
    }
  }
`;

export const SearchDoneBtn = styled.button`
  border-radius: 20px;
  background-color: black;
  color: white;
  left: 83px;
  right: 83px;
  bottom: 23.66px;
  height: 41px;
  font-family: Pretendard-SemiBold;
  font-size: 18px;
  position: absolute;
`;

export const DoneBtn = styled.button`
  flex: 1;
  border-radius: 20px;
  padding: 10px 0;
  margin: 25px 38px;
  width: auto;
  height: 41px;
  color: white;
  background-color: black;
  font-family: Pretendard-SemiBold;
  font-size: 18px;
`;

export const JudgeSearchResultContainer = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 118px;
  left: 0;
  right: 0;
  height: 520px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: nowrap;
  border-top: 1px solid #dedede;
  list-style: none;
  .observer {
    height: 10px;
  }
  li {
    padding-top: 15px;
    padding-bottom: 13px;
    border-bottom: 1px solid #f3f3f3;
    .placeName {
      margin: 0 30px;
      font-size: 16px;
      line-height: 19.09px;
      margin-bottom: 4px;
    }
    .address {
      margin: 0 31px 0 30px;
      font-size: 13px;
      color: #636363;
      margin-bottom: 9px;
    }
    .detail {
      margin: 0 32px 0 30px;
      text-align: center;
      padding: 3px 0 5px 0;
      border: 1px solid #d2d2d2;
      border-radius: 10px;
      box-sizing: border-box;
      height: 21px;
      width: 89px;

      display: block;
      font-size: 11px;
      a {
        text-decoration: none;
        color: #949494;
      }
    }
  }

  .noResult {
    width: 100%;
    text-align: center;
    padding-top: 65px;
    img {
      width: 97px;
      height: 106.37px;
    }
    .comment {
      margin-top: 25.63px;
      line-height: 22px;
      font-size: 16px;
      color: #515151;
    }
  }
`;

export const JudgeNewDoneModalContainer = styled.div`
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

export const JudgeNewDoneModalInner = styled.div`
  position: relative;
  margin: 0 38px;
  width: 314px;
  // height: 180px;
  border-radius: 17px;
  background-color: white;
  text-align: center;
  font-size: 18px;
  line-height: 21.48px;
  .xBtn {
    position: absolute;
    top: 16px;
    right: 17px;
    padding: 0;
    height: 16px;
    width: 16px;
  }
  .successDiv {
    margin-top: 48px;
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
    padding: 0;
  }

  .confirmDiv {
    // height: 173px;
    .comment {
      margin-top: 69px;
      margin-bottom: 30px;
    }
    .btns {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
      .yesNoBtn {
        width: 100px;
        height: 40px;
        margin: 0 5px;
        background-color: black;
        color: white;
        border-radius: 20px;

        font-family: Pretendard-SemiBold;
        font-size: 18px;
      }
    }
  }

  .doneBtn {
    height: 41px;
    width: 200px;
    margin: 30px 0;
    background-color: black;
    color: white;
    border-radius: 20px;

    font-size: 18px;
    font-family: Pretendard-SemiBold;
  }
`;

export const JudgeRecentSearchContainer = styled.div`
  margin-top: 67.5px;
  padding: 0 25px;
  height: 515px;
  overflow-y: auto;
`;

export const RecommendCategoryContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 18px;
    font-family: Pretendard-SemiBold;
    color: #494949;
    margin-bottom: 3px;
    display: inline-block;
  }
  .choice {
    margin-left: 5px;
    display: inline-block;
    font-size: 13px;
    color: #7c7c7c;
    line-height: 15.73px;
  }
  .sub {
    font-size: 12px;
    color: #6b6b6b;
    margin-bottom: 11px;
  }
`;

export const RecommendCategoryLi = styled.li`
  height: 18px;
  flex-shrink: 1;
  font-size: 15px;
  border: 1px solid ${(props) => props.color};
  border-radius: 15px;
  padding: 5px 14px;
  margin-bottom: 10px;
  margin-right: auto;
  span {
    color: ${(props) => props.color};
    font-family: Pretendard-SemiBold;
  }
`;
