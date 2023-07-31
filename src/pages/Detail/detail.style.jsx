import styled from 'styled-components';
import likeIcon from '../../assets/img/review-like-icon.svg';
import whiteLikeIcon from '../../assets/img/review-white-like-icon.svg';

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
  .detailTopBtns {
    display: flex;
    justify-content: space-between;
    margin: 20px 16px 0 16px;
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
    .bestReview {
      padding: 0 30px;
      margin: 7px 0 20px 0;
      font-size: 14px;
      font-style: oblique;
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
  .infos {
    margin: 15px 0 0 35px;
    .info {
      display: flex;
      // align-items: center;
      margin-bottom: 10px;
      font-size: 14px;
      .key {
        color: #666666;
        width: 70px;
      }
      .value {
        font-family: Pretendard-Regular;
        flex-grow: 2;
      }
      .recom {
        display: flex;
        align-items: center;
      }
      .recomTag {
        border: 1px solid;
        border-radius: 15px;
        margin-right: 5px;
        padding: 1px 9px;
        font-size: 11px;
        .hash {
        }
      }
      .more {
        margin-top: 5px;
        width: max-content;
      }

      .etc {
        font-size: 14px;
        display: flex;
        align-items: center;
        img {
          margin-left: 5px;
          margin-top: 1px;
          width: 13px;
          height: 13px;
        }
        .moreBtn {
          margin-left: 3px;
          font-size: 10px;
          color: #707070;
          width: 12px;
          height: 12px;
        }
      }
      .recomTagChangeBtn {
        height: 15px;
        width: 15px;
        margin-right: 25px;
        img {
          height: 15px;
          width: 15px;
        }
      }
    }
  }

  .help {
    margin: 21px 20px 0 20px;
    display: flex;
    align-items: center;
    .helpImg {
      height: 30px;
      width: 30px;
      margin-right: 15px;
    }
    .helpText {
      background-color: #f4f4f4;
      padding: 11px 16px 13px 16px;
      border-radius: 10px;
      font-size: 11.5px;
      line-height: 25px;
      color: #383838;
      .bold {
        font-family: Pretendard-SemiBold;
      }
    }
  }
  .menu {
    .menuTop {
      display: flex;
      justify-content: space-between;
      margin: 25px 35px 0 20px;
      .menuTitle {
        font-family: Pretendard-SemiBold;
        font-size: 19px;
      }
      .addMenuBtn {
        font-size: 14px;
        font-family: Pretendard-SemiBold;
        color: #6ab2b2;
        padding: 3px 7px 3px 8px;
        border: 1px solid #6ab2b2;
        border-radius: 10px;
      }
    }
    .menuUl {
      width: auto;
      margin: 25px 25px 0 40px;
      padding-left: 5px;
      display: flex;
      flex-direction: column;
      .menuLiInner {
        display: flex;
        align-items: top;
        font-size: 17px;
        margin-bottom: 10px;
        .menuName {
          max-width: 114px;
          white-space: nowrap;
          overflow: auto;
          padding-bottom: 10px;
        }
        .menuPhotoBtn {
          width: 40px;
          height: 20px;
          margin-top: 1px;
          margin-left: 7px;
          padding: 1px 2px 2px 2px;
          color: #6ab2b2;
          font-family: Pretendard-SemiBold;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          border: 1px solid #6ab2b2;
          border-radius: 20%;
          margin-right: auto;
          img {
            width: 14px;
          }
        }
        .saleOuter {
          display: flex;
          height: 20px;
          .saleTag {
            margin-right: 10px;
            box-sizing: border-box;
            font-family: 'Pretendard-SemiBold';
            background-color: #f59e0b;
            color: white;
            border-radius: 50%;
            font-size: 13px;
            width: 40px;
            height: 17px;
            margin-top: 3px;
            text-align: center;
            line-height: 16px;
          }
          .salePrice {
            height: 20px;
            color: #f59e0b;
            font-size: 17px;
            border-bottom: 1.5px solid #f59e0b;
          }
        }

        .menuPrice {
          height: 20px;
          color: #6a6a6a;
        }
        .changeBtn {
          height: 20px;
          margin-left: 12px;
          padding-top: 2px;
          img {
            height: 15px;
          }
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
  padding: 41px 0 46px 0;
  display: flex;
  flex-direction: column;
  .title {
    font-family: Pretendard-SemiBold;
    font-size: 20px;
    margin-left: 20px;
  }
  .subTitle {
    color: #5c5c5c;
    font-size: 17px;
    .restaurantName {
      font-family: Pretendard-Medium;
      color: black;
    }
    margin: 15px 0 0 33px;
  }
  .address {
    margin: 8px 0 0 33px;
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
    margin: 15px 0 0 54px;
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
    // height: 521px;
    background-color: white;
    border-radius: 10px;
    .closeBtn {
      position: absolute;
      top: 16px;
      right: 18px;
    }
  }
`;

export const RecomTagModalContainer = styled(ModalCommon)`
  .modalInner {
    .title {
      margin-top: 15px;
    }
    .subTitle {
      color: #6b6b6b;
      font-size: 13px;
      margin-left: 20px;
      margin-top: 5px;
    }
    .tagsUl {
      list-style: none;
      padding: 0;
      padding-left: 20px;
      .tagLi {
        height: 18px;
        width: max-content;
        // flex-shrink: 1;
        font-size: 15px;
        border: 1px solid;
        border-radius: 15px;
        padding: 5px 14px;
        margin-bottom: 10px;
        margin-right: auto;
        .hash {
          font-family: Pretendard-SemiBold;
        }
      }
    }
    .okBtn {
      margin-left: 50%;
      margin-bottom: 20px;
      transform: translate(-50%, 0%);
      width: 188px;
      height: 41px;
      border-radius: 10px;
      background-color: black;
      color: white;
      font-size: 18px;
      font-family: Pretendard-SemiBold;
    }
  }
`;

export const DetailMenuPhotoModalContainer = styled(ModalCommon)`
  .modalInner {
    height: 521px;
  }
  .menuPhotoModalTop {
    display: flex;
    margin: 30px 0 22px 33px;
    font-size: 20px;
    font-family: Pretendard-Medium;
    .menuModalPhotoPhotoNum {
      margin-left: 5px;
      color: #6ab2b2;
    }
  }
  .menuPhotoModalUl {
    margin: 0 10px;
    padding: 0 21.5px;
    height: 350px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    .menuPhotoModalLi {
      position: relative;
      width: 50%;
      height: 0;
      padding: 0;
      padding-bottom: 50%;
      border-radius: 3px;

      .menuPhoto {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 2.5px;
        box-sizing: border-box;
        border-radius: 6px;
      }
    }
  }

  .newPhotoBtn {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 24.66px;
    left: 83px;
    width: 188px;
    height: 41px;
    padding-top: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #6ab2b2;
    color: white;
    font-size: 18px;
    font-family: Pretendard-SemiBold;

    input {
      display: none;
    }
  }
`;

export const DetailMenuPhotoInnerModalContainer = styled(ModalCommon)`
  .modalInner {
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #525252;
    .detailPhoto {
      margin-top: 47px;
      width: 273px;
      height: 273px;
      border-radius: 3px;
    }
    // .fileName {
    //   margin-top: 11px;
    //   font-size: 15px;
    // }
    .photoInfo {
      display: flex;
      align-items: center;
      margin-top: 15px;
      .userName {
        margin-right: 10px;
        font-size: 16px;
        .bold {
          font-family: Pretendard-SemiBold;
        }
      }
      .deleteBtn {
        color: #6ab2b2;
        font-size: 12px;
        img {
          width: 17px;
          height: 17px;
        }
      }
    }
  }
`;

export const DetailMenuPhotoDeleteModalContainer = styled(ModalCommon)`
  .modalInner {
    height: 140px;
    width: 320px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    box-sizing: border-box;
    .deleteTitle {
      font-family: Pretendard-SemiBold;
      font-size: 18px;
    }
    .deleteWarning {
      margin-top: 15px;
      font-size: 11px;
      color: #ff6020;
    }
    .btnOuter {
      display: flex;
      .deleteInnerBtn {
        margin: 25px 5px 0 5px;
        font-family: Pretendard-SemiBold;
        background-color: #6a6a6a;
        border-radius: 10px;
        padding: 5px 10px;
        color: white;
      }
    }
  }
`;

export const DetailMenuUpdateModalContainer = styled(ModalCommon)`
  .modalInner {
    height: 500px;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    .menuUpdateTitle {
      font-family: Pretendard-Bold;
      font-size: 19px;
      margin: 19px 0 0 25px;
    }
    .menuUpdateWarning {
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
        font-size: 13px;
        color: #383838;
        line-height: 20px;
      }
    }
    .menuUpdateBody {
      margin: 22px 0 0 0;
      display: flex;
      flex-direction: column;
      .won {
        font-size: 16px;
      }
      input::placeholder,
      textarea::placeholder {
        color: #cdcdcd;
      }
      .menuUpdateBodyTitle,
      .saleUpdateTitle {
        font-family: Pretendard-Medium;
        font-size: 19px;
        margin-left: 30px;
        .optional {
          font-size: 12px;
          color: #f59e0b;
        }
      }

      .updateInput {
        background-color: #f4f4f4;
        color: #4e4e4e;
        border: 1px solid #e3e3e3;
        padding: 7px;
        border-radius: 3px;
        font-family: Pretendard-Regular;
      }
      .menuUpdateInputOuter {
        margin: 15px 20px 10px 20px;
        display: flex;
        align-items: center;
        font-size: 18px;

        .menuPrice,
        .menuName {
          width: 120px;
          margin-right: 10px;
        }
      }
      .warningDiv {
        margin-left: 30px;
        height: 20px;
        font-size: 12px;
        color: #ca2d18;
        .bold {
          font-family: Pretendard-SemiBold;
        }
      }
      .saleUpdateInputOuter {
        margin: 15px 20px 25px 20px;
        .saleInputLabel {
          margin: 0 0 7px 7px;
          font-size: 14px;
        }
        .saleCommentLabel {
          margin-top: 15px;
        }
        .salePrice {
          display: inline;
          margin-right: 7px;
        }
        .saleComment {
          margin-bottom: 10px;
          width: 290px;
          height: 60px;
        }
      }
    }
    .menuUpdateModalBtns {
      display: flex;
      margin: 0 auto;
      align-items: center;
      position: sticky;
      bottom: 20px;

      .menuUpdateBtn {
        margin: 0 auto;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
        width: 188px;
        height: 41px;
        border-radius: 10px;
        background-color: black;
        color: white;
        font-size: 18px;
        font-family: Pretendard-SemiBold;
      }
      .menuDeleteBtn {
        width: 33px;
        height: 33px;
        margin-left: 10px;
        border: 1.5px solid black;
        border-radius: 50%;
        padding-top: 2px;
      }
    }
  }
`;

export const DetailMenuSaleInfoModalContainer = styled(ModalCommon)`
  .modalInner {
    overflow-y: auto;
    position: relative;
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    flex-direction: column;
    .saleCommentTitle {
      font-size: 18px;
      font-family: Pretendard-SemiBold;
      margin-top: 14px;
    }
    .saleComment {
      margin: 10px 0 20px 0;
      font-size: 14px;
    }
  }
`;

export const DetailMenuDeleteModalContainer = styled(ModalCommon)`
  .modalInner {
    height: 60px;
    margin: 70px;
    padding: 20px;
    display: flex;
    overflow-y: clip;
    flex-direction: column;
    align-items: center;
    .deleteComment {
      // font-family: Pretendard-SemiBold;
    }
    .btns {
      display: flex;
      margin-top: 20px;
      .btn {
        border-radius: 10px;
        background-color: black;
        color: white;
        padding: 5px 10px;
        font-family: Pretendard-SemiBold;
      }
      .yesBtn {
        margin-right: 10px;
      }
    }
  }
`;

export const DetailReviewModalContainer = styled(ModalCommon)`
  .modalInner {
    display: flex;
    flex-direction: column;
    height: 521px;
    .warning {
      // margin-left: 20px;
      position: relative;
      div {
        position: absolute;
        width: 100%;
        text-align: center;
      }
    }
  }
  .newReviewTitle {
    font-family: Pretendard-Bold;
    font-size: 19px;
    margin: 19px 0 0 25px;
  }
  .newReviewInfo {
    margin: 17px 24px 0 28px;
    display: flex;
    align-items: center;
    .infoImg {
      width: 31px;
      height: 34px;
      margin-right: 12px;
    }
    .infoText {
      width: 259px;
      // height: 62px;
      padding: 11px 15px 11px 19px;
      box-sizing: border-box;
      font-size: 14px;
      color: #383838;
      line-height: 20px;
      background-color: #f4f4f4;
      border-radius: 10px;
    }
  }
  .newReviewBody {
    margin: 22px 20px 0 20px;
    font-family: Pretendard-Medium;
    font-size: 18px;

    .newReviewBodyTitle {
      margin-left: 1px;

      font-size: 18px;
    }
    .newReviewContent {
      display: block;
      margin-top: 12px;
      padding: 7px 13px;
      box-sizing: border-box;
      background-color: #f4f4f4;
      border: none;
      outline-color: none;
      resize: none;
      border-radius: 3px;
      width: 314px;
      height: 170px;
      font-size: 14px;
      color: #727272;
    }
  }
  .newReviewRate {
    margin: 30px 0 45px 0;
    .newReviewRateTitle {
      margin-left: 21px;
      font-family: Pretendard-Medium;
      font-size: 18px;
    }
    .newReviewRateStars {
      width: 100%;
      margin: px auto 0 auto;
      display: flex;
      justify-content: center;
      .reviewStar {
        width: 24px;
        height: 24px;
      }
    }
  }
  .newReviewSubmitBtn {
    margin: 0 auto;
    width: 188px;
    height: 41px;
    background-color: black;
    color: white;
    border-radius: 10px;
    font-family: Pretendard-SemiBold;
    font-size: 18px;
  }
`;
export const DetailReviewDeleteModalContainer = styled(ModalCommon)`
  .modalInner {
    height: 60px;
    margin: 70px;
    padding: 20px;
    display: flex;
    overflow-y: clip;
    flex-direction: column;
    align-items: center;
    .deleteComment {
      // font-family: Pretendard-SemiBold;
    }
    .btns {
      display: flex;
      margin-top: 20px;
      .btn {
        border-radius: 10px;
        background-color: black;
        color: white;
        padding: 5px 10px;
        font-family: Pretendard-SemiBold;
      }
      .yesBtn {
        margin-right: 10px;
      }
    }
  }
`;

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
  padding-bottom: 15px;
  margin-top: 15px;
  border-bottom: 1px solid #f4f4f4;
  .profileImg {
    height: 34px;
    width: 34px;
    margin-right: 10px;
  }
  .reviewBody {
    width: 100%;
    position: relative;
    .userName {
      font-family: Pretendard-SemiBold;
      color: #737373;
      font-size: 13px;
    }
    .UpdateAndDeleteBtns {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 11px;
      button {
        color: #737373;
      }
    }
    .rating {
      margin-top: 4px;
    }
    .content {
      font-size: 14px;
      line-height: 20px;
      margin-top: 2px;
      // height: 60px;
      white-space: pre-wrap;
    }
    .likeAndDate {
      margin-top: 22px;
      display: flex;
      justify-content: space-between;
      .likeBtn {
        // font-family:Pretendard-SemiBold;
        box-sizing: border-box;
        width: 50px;
        height: 22px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 13px;
          height: 13px;
        }
        .likeNum {
          font-size: 12px;
          padding-bottom: 1px;
          margin-left: 3px;
        }
      }
      .liked {
        background-color: #6ab2b2;
        color: white;
        img {
          content: url(${whiteLikeIcon});
        }
      }
      .unliked {
        border: 1px solid #bdbdbd;
        color: #5e5e5e;
        img {
          content: url(${likeIcon});
        }
      }
      .date {
        font-size: 13px;
        color: #bdbdbd;
      }
    }
  }
`;
