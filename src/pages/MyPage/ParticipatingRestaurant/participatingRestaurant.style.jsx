import styled from 'styled-components';

export const ParticipatingRestaurantContainer = styled.div`
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
  .subTitle {
    margin-top: 25px;
    font-family: Pretendard-SemiBold;
    font-size: 16px;
    color: #9b9b9b;
  }
  .userName {
    color: black;
  }
  .bold {
    font-family: Pretendard-SemiBold;
  }
`;

export const ParticipatingRestaurantHeader = styled.div`
  margin: 22px 0;
  .explanation {
    margin: 0 12px;
    display: flex;
    align-items: center;
    .smileIcon {
      margin-right: 15px;
      width: 36px;
      height: 36px;
    }
    .explanationText {
      width: 259px;
      padding: 11px 19px;
      background-color: #f4f4f4;
      border-radius: 10px;
      line-height: 22px;
      font-size: 14px;
      color: #383838;
      .number {
        font-size: 16px;
        color: #6ab2b2;
      }
    }
  }
`;

export const ParticipatingRestaurantUl = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  .moreBtn {
    width: 100%;
    height: 40px;
    // border: 1px solid #f4f4f4;
    // border-top: none;
    background-color: #f4f4f4;
  }
`;

export const ParticipatingRestaurantLi = styled.li`
  display: flex;
  //   justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  .restImg {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .restInfo {
    margin-right: auto;
    .restTitle {
      font-family: Pretendard-SemiBold;
      margin-top: 3px;
    }
    .restTags {
      margin-top: 5px;
      display: flex;
      color: #636363;
      .cat {
        margin-right: 5px;
        font-size: 14px;
      }
    }
  }
  .rating {
    margin-top: 13px;
    font-size: 22px;
    margin-right: 15px;
    color: #6ab2b2;
  }
  .review {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    margin-top: 5px;
    .reviewIcon {
      width: 25px;
      margin-bottom: 3px;
    }
    .reviewNum {
      font-size: 13px;
    }
  }
  .wishAndRoulette {
    button {
      width: 37px;
      height: 37px;
      box-sizing: border-box;
      border: 1px solid #bdbdbd;
      border-radius: 50%;
      margin: 4px;
      img {
        margin-top: 2px;
      }
    }
    .colored {
      background-color: #6ab2b2;
      border: none;
    }
  }
`;
