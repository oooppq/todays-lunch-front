import styled from 'styled-components';
import likeIcon from '../../../assets/img/review-like-icon.svg';
import whiteLikeIcon from '../../../assets/img/review-white-like-icon.svg';

export const MyReviewContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 67px 25px 0 25px;
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
  }
`;

export const MyReviewHeader = styled.div`
  margin-top: 32px;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  color: #9b9b9b;
  .userName {
    color: black;
  }
`;

export const MyReviewUl = styled.ul`
  margin: 24px 3px 20px 3px;
  padding: 0;
  list-style: none;
`;

export const MyReviewLi = styled.li`
  padding-bottom: 7px;
  margin-bottom: 8px;
  width: 100%;
  // height: 97px;
  display: flex;
  border-bottom: 1px solid rgb(264, 244, 244);
  .restaurantImg {
    height: 100%;
    width: 97px;
    border-radius: 3px;
  }
  .restaurantInfo {
    width: 220px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    .restaurantName {
      font-size: 18px;
      line-height: 21px;
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
      margin-top: 5px;
      margin-bottom: 10px;
      color: #494242;

      font-size: 12px;
    }
    .likeBtnAndDate {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      .likeBtn {
        height: 22px;
        width: 62px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .likeImg {
          width: 15px;
          height: 15px;
          padding-bottom: 1px;
        }
        .likeNum {
          margin-left: 6px;
          font-size: 12px;
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
        color: #8d8d8d;
        font-size: 12px;
      }
    }
  }
`;
