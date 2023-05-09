const { default: styled } = require('styled-components');

export const MyPageContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding-top: 89px;
  max-width: 390px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
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
`;

export const MyPageTop = styled.div`
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
      span {
        color: black;
      }
    }
    .changeName {
      color: #9b9b9b;
      text-decoration: underline;
    }
  }
  .myPageBtns {
    margin-top: 18px;
    display: flex;
    justify-content: center;
    .myPageBtn {
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
        margin: 19px 0 6px 0;
        line-height: 24px;
        font-size: 20px;
      }
    }
  }
`;
export const MyPageMid = styled.div`
  padding: 0 32px 30px 30px;
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
  .empty {
    height: 13px;
    background-color: #f4f4f4;
    margin-bottom: 26px;
  }
  .bottomBtn {
    margin: 0 36px;
    display: block;
    font-size: 17px;
    margin-bottom: 20px;
    .bottomBtnIcon {
      width: 18px;
      height: 18px;
      margin-right: 11px;
    }
  }
`;
