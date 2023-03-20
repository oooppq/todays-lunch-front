import styled from 'styled-components';

export const DetailContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  max-width: 390px;
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
`;

export const DetailTopContainer = styled.div`
  background-color: white;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 4px 2.5px rgba(0, 0, 0, 0.1);
  .backBtn {
    margin: 20px 0 0 16px;
  }
  .restInfo {
    margin-top: 17px;
    width: 100%;
    text-align: center;
    .restImg {
      display: block;
      width: 164px;
      height: 164px;
      margin: 0 auto;
      border-radius: 3px;
    }
    .title {
      font-size: 24px;
      margin-top: 14px;
    }
    .reviewWish {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      .reviewDiv,
      .wishDiv {
        display: flex;
        margin: 0 7px;
        color: #666666;
        img {
          margin-right: 5px;
        }
      }
    }
    .rate {
      margin-top: 3px;
      font-family: Pretendard-SemiBold;
      color: #6ab2b2;
      font-size: 32px;
    }
  }
  .navUl {
    list-style: none;
    display: flex;
    // justify-content: center;
    padding: 0;
    margin: 15px 0 0 27px;
    .navLi {
      width: 67px;
      margin: 0 9px;
      text-align: center;
      padding-bottom: 10px;
      .dish {
        object-fit: none;
        width: 50px;
        height: 37px;
      }
    }
    .active {
      border-bottom: 3px solid black;
    }
  }
`;

export const DetailInfoContainer = styled.div`
  background-color: white;
  margin-top: 26px;
  .update {
    font-size: 13px;
    color: #acacac;
    margin-right: 15px;
    padding-top: 9px;
    text-align: right;
  }
  .title {
    font-family: Pretendard-SemiBold;
    font-size: 20px;
    margin-left: 20px;
  }
  .hashTags {
    display: flex;
    margin: 19px 0 0 46px;
    color: #666666;
    .hashTag {
      margin-right: 5px;
    }
  }
  .recomCat {
    display: inline-block;
    box-sizing: border-box;
    margin-left: 43px;
    border: 1px solid #6ab2b2;
    border-radius: 15px;
    padding: 3px 14px;
    margin-top: 5px;
    font-size: 15px;
  }
  .help {
    margin: 21px 40px 0 40px;
    display: flex;
    .helpImg {
      margin-right: 15px;
    }
    .helpText {
      background-color: #f4f4f4;
      padding: 11px 19px 13px 19px;
      border-radius: 10px;
      font-size: 14px;
      line-height: 20px;
      color: #383838;
    }
  }
  .menu {
    .menuTop {
      display: flex;
      justify-content: space-between;
      margin: 25px 40px 0 33px;
      .menuTitle {
        font-family: Pretendard-Medium;
        font-size: 19px;
      }
      .menuUpdate {
        font-size: 14px;
        color: #6ab2b2;
        padding: 5px 7px 3px 8px;
        border: 1px solid #6ab2b2;
        border-radius: 10px;
      }
    }
    .menuUl {
      width: auto;
      margin: 14px 43px 0 50px;
      padding-left: 5px;

      .menuLiInner {
        display: flex;
        font-size: 17px;
        margin-bottom: 20px;
        .menuPhotoNum {
          margin-left: 5px;
          flex-grow: 1;
          color: #6ab2b2;
        }
        .menuPrice {
          color: #6a6a6a;
        }
      }
    }
  }
  .sale {
    padding-top: 23px;
    .saleTop {
      display: flex;
      justify-content: space-between;
      margin: 0 40px 0 33px;
      .saleTitle {
        font-size: 19px;
        font-family: Pretendard-Medium;
      }
      .saleUpdate {
        font-size: 14px;
        color: #6ab2b2;
        padding: 5px 7px 3px 8px;
        border: 1px solid #6ab2b2;
        border-radius: 10px;
      }
    }
    .saleUl {
      list-style: none;
    }
  }
`;

export const DetailMapContainer = styled.div`
  background-color: white;
  padding: 61px 0 46px 0;
  display: flex;
  flex-direction: column;
  .title {
    font-family: Pretendard-SemiBold;
    font-size: 20px;
    margin-left: 20px;
  }
  .subTitle {
    font-family: Pretendard-Medium;
    font-size: 19px;
    margin: 15px 0 0 33px;
  }
  .address {
    margin: 6px 0 0 33px;
    font-size: 13px;
    color: #5c5c5c;
  }
  .map {
    width: 100%;
    height: 188px;
    margin-top: 13px;
  }
  .findWay {
    margin: 12px auto 0 auto;

    width: 132px;
    height: 30px;
    border: 1px solid #bdbdbd;
    border-radius: 20px;
    a {
      font-size: 13px;
      color: #5e5e5e;
      text-decoration: none;
      line-height: 1;
    }
  }
`;

export const DetailContributorContainer = styled.div`
  background-color: white;
  padding-bottom: 110px;
  .title {
    font-family: Pretendard-SemiBold;
    font-size: 20px;
    margin-left: 20px;
  }
  .contributors {
    padding: 0;
    margin: 13px 0 0 54px;
    display: flex;
    list-style: none;
    .contributorLi {
      margin-right: 20px;
      font-size: 15px;
      color: #525252;
      .profileImg {
        width: 41.7px;
        height: 45.73px;
      }
    }
  }
`;

const ModalCommon = styled.div`
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

export const DetailMenuModalContainer = styled(ModalCommon)`
  .menuModalTop {
    display: flex;
    margin: 30px 0 0 33px;
    font-size: 20px;
    font-family: Pretendard-Medium;
    .menuModalPhotoNum {
      margin-left: 5px;
      color: #6ab2b2;
    }
  }
  .newPhotoBtn {
    position: absolute;
    bottom: 24.66px;
    left: 83px;
    width: 188px;
    height: 41px;
    border-radius: 20px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-family: Pretendard-SemiBold;
  }
`;

export const DetailUpdateMenuModalContainer = styled(ModalCommon)`
  .updateMenuTitle {
    font-family: Pretendard-Bold;
    font-size: 19px;
    margin: 19px 0 0 25px;
  }
  .updateMenuWarning {
    display: flex;
    margin: 14px 0 0 22px;
    align-items: center;
    .warningComment {
      width: 259px;
      height: 84px;
      padding: 11px 15px 13px 19px;
      margin-left: 16px;
      box-sizing: border-box;
      background-color: #f4f4f4;
      border-radius: 10px;
      font-size: 14px;
      color: #383838;
      line-height: 20px;
    }
  }
  .updateMenuBody {
    margin: 22px 0 0 0;
    display: flex;
    flex-direction: column;
    .updateMenuBodyTitle {
      font-family: Pretendard-Medium;
      font-size: 19px;
      margin-left: 30px;
    }
    .updateMenuBodyUl {
      margin: 15px 38px 0 43px;
      padding: 0;
      .updateMenuBodyLi {
        margin-bottom: 11px;
        .updateMenuBodyLiInner {
          display: flex;
          font-size: 18px;
          .menuName {
            margin-right: auto;
          }
          .menuPrice {
            color: #6a6a6a;
          }
          .newMenuName {
            width: 153px;
            margin-right: auto;
          }
          .newMenuPrice {
            width: 83px;
          }
        }
      }
      .updateMenuBodyLi::marker {
        font-size: 5px;
      }
    }
    .newMenuBtn {
      margin: 26px auto 0 auto;
    }
  }
  .updateMenuBtn {
    position: absolute;
    bottom: 24.66px;
    left: 83px;
    width: 188px;
    height: 41px;
    border-radius: 20px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-family: Pretendard-SemiBold;
  }
`;

export const DetailUpdateSaleModalContainer = styled(ModalCommon)``;

export const DetailReviewContainer = styled.div`
  background-color: white;
  margin-top: 26px;
  .reviewTitle {
    margin: 33px 0 0 20px;
    font-family: Pretendard-SemiBold;
    font-size: 20px;
    span {
      padding-left: 5px;
      font-family: Pretendard-Regular;
      color: #6ab2b2;
      font-size: 18px;
    }
  }
  .newReview {
    margin-top: 29px;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid #dfdfdf;
    .myProfileImg {
      width: 31px;
      height: 34px;
      margin: 0 12px 0 15px;
    }
    .newReviewBtn {
      margin-right: 15px;
      background-color: #f4f4f4;
      width: 100%;
      border-radius: 3px;
      text-align: left;
      font-family: Pretendard-Medium;
      font-size: 14px;
      color: #727272;
      padding: 7px 0 7px 13px;
    }
  }
  .reviews {
    list-style: none;
    padding: 0;
    margin: 18px 23px 0 15px;
  }
`;

export const DetailReviewElem = styled.li`
  display: flex;
  height: 147px;
  margin-bottom: 21px;
  .profileImg {
    height: 34px;
    width: 34px;
    margin-right: 10px;
  }
  .reviewBody {
    width: 100%;
    .userName {
      font-family: Pretendard-SemiBold;
      color: #737373;
      font-size: 13px;
    }
    .rating {
      margin-top: 4px;
    }
    .content {
      font-size: 14px;
      line-height: 20px;
      margin-top: 2px;
      height: 60px;
    }
    .likeAndDate {
      margin-top: 22px;
      display: flex;
      justify-content: space-between;
      .like {
        width: 50px;
        height: 26px;
        border: 1px solid #bdbdbd;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .likeNum {
          font-size: 12px;
          color: #5e5e5e;
          padding-top: 2px;
          margin-left: 6px;
        }
      }
      .date {
        font-size: 13px;
        color: #bdbdbd;
      }
    }
  }
`;
