import styled from 'styled-components';

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
  margin: 24px 3px 0 3px;
  padding: 0;
  list-style: none;
`;

export const MyReviewLi = styled.li`
  margin-bottom: 9px;
  width:100%;
  height 97px;
  display: flex;
  .restaurantImg {
    height: 100%;
    width: 97px;
    border-radius: 3px;
  }
  .restaurantInfo {
    width:220px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    .restaurantName {
        font-size: 18px;
        line-height: 21px;
    }
    .rating {
        margin-top: 4px;
    }
    .content {
        margin-top: 5px;
        height: 32px;
        overflow: hidden;
        color: #494242;
        
        font-size: 12px;
    }
    .likeBtnAndDate {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
      .likeBtn {
        height:23px;
        width: 60px;
        border: 1px solid #bdbdbd;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .likeImg {
            width: 15px;
            height: 15px;
            padding-bottom:1px;
        }
        .likeNum {
            margin-left: 6px;
            font-size: 12px;
        }
      }
      .date {
        color: #8d8d8d;
        font-size: 12px;
      }
    }
  }
`;
