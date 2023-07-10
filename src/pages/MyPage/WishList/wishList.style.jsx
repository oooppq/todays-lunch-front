import styled from 'styled-components';

export const WishListContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 67px 26px 0 26px;
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
  .myRestaurantList {
    margin: 0 !important;
  }
`;

export const WishListHeader = styled.div`
  margin: 22px 14px 3px 14px;
  .explanation {
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
      line-height: 20px;
      font-size: 14px;
      color: #383838;
    }
  }
  .title {
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
