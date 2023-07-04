import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const PlayContainer = styled.div`
  padding: 30px 13px 0 13px;
  overflow: clip;

  .addedRestaurants {
    padding-bottom: 10px;
    margin-bottom: 10px;
    // border-bottom: 1px solid #ededed;
    .listTitle {
      font-size: 18px;
      font-family: Pretendard-SemiBold;
      margin: 0 0 10px 10px;
      .listTitleSub {
        // color: #ff6020;
        color: #999999;
        font-size: 14px;
        font-family: Pretendard;
      }
    }
    .restaurantsUl {
      list-style: none;
      margin: 0 0 0 20px;
      padding: 0;
      .restaurantLi {
        height: 16px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        .restaurantName {
          font-size: 14px;
        }
        .deleteRestaurantBtn {
          margin-left: 5px;
          height: 15px;
          width: 14px;
          img {
            height: 14px;
            width: 14px;
          }
        }
      }
    }
    .moreRestaurantBtn {
      color: #494949;

      margin-left: 20px;
      padding-bottom: 2px;
      border-bottom: 1px solid #494949;
      // padding: 3px 5px;
      // border-radius: 3px;
      // border: 1px solid #6ab2b2;
      // background-color: #6ab2b2;
      // color: white;
    }
  }
  .needMoreRestaurantOuter {
    width: 364px;
    height: 418px;
    position: relative;
    .rouletteImg {
      width: 364px;
      height: 364px;
    }
    .blur {
      text-align: center;
      box-sizing: border-box;
      padding-top: 150px;
      position: absolute;
      top: 0;
      left: 0;
      width: 364px;
      height: 364px;
      border-radius: 50%;
      background-color: rgba(255, 255, 192, 0.1);
      backdrop-filter: blur(10px);
    }
  }
  .rouletteOuter {
    margin-top: 20px;
    position: relative;
    .rouletteContainer {
      z-index: -1;
      position: relative;
      width: 100%;

      .rouletteImg {
        width: 100%;
        display: block;
      }
      .rouletteUl {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: Pretendard-SemiBold;
        .rouletteLi {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.3);
          padding: 2px 6px;
          border-radius: 5px;
        }
      }
    }
    .selectPin {
      width: 26px;
      height: 32px;
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translate(-50%, 0%);
    }
    .btnsOuter {
      margin-top: 15px;
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        margin: 0 5px;
        width: 110px;
        height: 35px;
        border-radius: 20px;
        // background-color: black;
        color: white;
        font-family: Pretendard-SemiBold;
        font-size: 16px;
      }
      .clearBtn {
        background-color: #6f6f6f;
      }
      .startBtn {
        background-color: #6ab2b2;
      }
    }
  }
`;

export const SelectedModalContainer = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  flex-direction: column;
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
    align-items: center;
    box-sizing: border-box;
    width: 314px;
    padding: 20px;

    // height: 521px;
    background-color: white;
    border-radius: 10px;
    .modalHeader {
      margin-bottom: 18px;
      font-size: 18px;
      font-family: Pretendard-SemiBold;
    }
    .closeBtn {
      position: absolute;
      top: 16px;
      right: 18px;
    }
    .restaurantImg {
      margin-bottom: 7px;
      width: 140px;
      height: 140px;
      border-radius: 3px;
    }
    .restaurantNameAndRating {
      margin-bottom: 5px;
      font-size: 18px;
      font-family: Pretendard-SemiBold;
      .rating {
        color: #6ab2b2;
        margin-left: 7px;
      }
    }
    .tags {
      color: #666;
      font-size: 14px;
      margin-bottom: 2px;
      display: flex;
      div {
        margin-right: 7px;
      }
    }
    .review {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
      .number {
        color: black;
      }
    }
    .detailBtn {
      color: #666;
      margin-bottom: 10px;
      border-bottom: 1px solid #666;
    }
    .shareBtn {
      width: 50%;
      height: 41px;
      border-radius: 20px;
      font-size: 18px;
      font-family: Pretendard-SemiBold;
      color: white;
      background-color: black;
    }
  }
`;
