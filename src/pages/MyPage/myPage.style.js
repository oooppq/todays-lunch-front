const { default: styled } = require('styled-components');

export const MyPageContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding-top: 67px;
  max-width: 390px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pageTitle {
    display: flex;
    align-items: center;
    font-family: Pretendard-Medium;
    font-size: 20px;
    img {
      width: 30px;
      height: 30px;
      margin-right: 3px;
    }
  }
  .notVerifiedWarning {
    height: 100px;
    margin: 0 3px;
    padding: 20px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #fefbe8;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;
    .warningIcon {
      height: 60px;
      width: 60px;
      margin-right: 10px;
    }
    .notVerifiedWarningComment {
      line-height: 20px;
      font-size: 14px;
    }
  }
`;

export const MyPageTop = styled.div`
  margin-top: 23px;
  padding: 0 32px 0 30px;
  .userInfo {
    height: 60px;
    display: flex;
    align-items: center;
    .profileImgOuter {
      width: 55px;
      height: 60px;
      margin-right: 17px;
      position: relative;
      input {
        display: none;
      }
      .profileImg {
        width: 55px;
        height: 60px;
      }
      .changeProfileImgBtn {
        position: absolute;
        bottom: -3px;
        right: -3px;
        width: 22px;
        height: 22px;
        border: 1px solid #9b9b9b;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        img {
          width: 10px;
          height: 10px;
        }
      }
    }
    .userName {
      font-family: Pretendard-SemiBold;
      font-size: 20px;
      color: #9b9b9b;
      flex-grow: 1;
      .nicknameSpan {
        color: black;
      }
      .nicknameInput {
        border: 1px solid #e3e3e3;
        border-radius: 3px;
        padding: 7px;
        width: 170px;
        color: #707070;
      }
    }
    .changeNameBtn {
      color: #9b9b9b;
      text-decoration: underline;
      font-size: 14px;
    }
    .changeNameDoneBtn {
      color: #9b9b9b;
      width: 60px;
      font-size: 14px;
      border: 1px solid #e3e3e3;
      border-radius: 3px;
      padding: 7px;
    }
  }
  .myPageBtns {
    margin-top: 18px;
    display: flex;
    justify-content: center;
    .myPageBtn {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 4px;
      width: 88px;
      height: 88px;
      box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      text-align: center;
      font-family: Pretendard-Medium;
      font-size: 12px;
      line-height: 14.32px;

      .count {
        margin: 17px 0 6px 0;
        line-height: 24px;
        font-size: 20px;
      }
    }
  }
`;
export const MyPageMid = styled.div`
  padding: 0 32px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  .explanationOuter {
    margin: 0 10px;
    display: flex;
    align-items: center;
    .smileIcon {
      width: 36px;
      height: 36px;
      margin-right: 15px;
    }
    .explanation {
      border-radius: 10px;
      background-color: #f4f4f4;
      padding: 11px 19px;
      font-size: 14px;
      color: 383838px;
      .bold {
        font-family: Pretendard-SemiBold;
      }
    }
  }
  .categoryOuter {
    margin-top: 25px;
    .categoryTitle {
      margin-left: 6px;
      font-family: Pretendard-SemiBold;
      font-size: 16px;
      color: #9b9b9b;
      span {
        color: black;
      }
    }
    .categoryBody {
      display: flex;
      align-items: center;
      margin: 14px 2px 0 35px;
      .categorySubTitle {
        font-family: Pretendard-SemiBold;
        font-size: 12px;
        width: 60px;
      }
      .categories {
        display: flex;
        width: 170px;
        margin-right: auto;
        overflow-x: auto;
        white-space: nowrap;
        .category {
          height: 23px;
          box-sizing: border-box;
          padding: 4px 12px;
          margin-right: 5px;
          border: 1px solid #6ab2b2;
          border-radius: 30px;
          font-size: 12px;
          color: #3d3d3d;
        }
      }
      .changeBtn {
        font-size: 14px;
        color: #9b9b9b;
        text-decoration: underline;
        white-space: nowrap;
      }
    }
  }
`;
export const MyPageBottom = styled.div`
  width: 100%;
  .empty {
    height: 13px;
    background-color: #f4f4f4;
    margin-bottom: 26px;
  }
  .bottomBtn {
    margin: 0 36px;
    display: flex;
    align-items: center;
    font-size: 17px;
    margin-bottom: 20px;
    .bottomBtnIcon {
      width: 18px;
      height: 18px;
      margin-right: 11px;
    }
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChangeCategoryModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .modalInner {
    position: relative;
    width: 354px;
    height: 60%;
    min-height: 440px;
    background-color: white;
    border-radius: 10px;
    .modalTop {
      display: flex;
      position: relative;
      justify-content: center;
      .modalTitle {
        font-family: 'Pretendard-Bold';
        font-size: 19px;
        line-height: 23px;
        margin-top: 19px;
      }
      .xBtn {
        position: absolute;
        top: 16px;
        right: 18px;
      }
    }
    .categoryOuter {
      margin-top: 32px;
      .categoryOuterTitle {
        font-family: 'Pretendard-SemiBold';
        font-size: 16px;
        line-height: 19px;
        color: #9b9b9b;
        margin-left: 25px;
        .nickname {
          color: black;
        }
      }
      .currentCategoryUl {
        list-style: none;
        margin: 18px 35px 0 35px;
        padding: 0;
        box-sizing: border-box;
        // width: 100%;
        display: flex;
        flex-wrap: wrap;
        .currentCategoryLi {
          display: flex;
          align-items: center;
          overflow-x: auto;
          margin: 0 8px 14px 0;
          .currentCategoryTitle {
            padding: 4px 10px;
            margin-right: 4px;
            border: 1px solid #6ab2b2;
            border-radius: 30px;
            font-size: 12px;
            line-height: 15px;
            color: #3d3d3d;
          }
        }
      }
      .newCategoryUl {
        list-style: none;
        margin-left: 10px;
        .newCategoryLi {
          display: flex;
          margin-bottom: 10px;
          .categoryTitle {
            font-family: 'Pretendard-SemiBold';
            margin-right: 8px;
          }
          .plusBtn {
            width: 19px;
            height: 19px;
            .plusIcon {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .changeBtn {
      position: absolute;
      bottom: 39px;
      z-index: 100;
      margin: 0 83px;
      width: 188px;
      height: 41px;
      background-color: black;
      border-radius: 20px;

      font-family: 'Pretendard-SemiBold';
      font-size: 18px;
      line-height: 21px;
      color: white;
    }
  }
`;
