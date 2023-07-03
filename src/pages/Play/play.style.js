import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const PlayContainer = styled.div`
  padding-top: 30px;
  margin: 0 13px;
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
    // margin-top: 20px;
    position: relative;
    .rouletteContainer {
      z-index: -1;
      position: relative;
      width: 364px;
      height: 364px;
      .rouletteImg {
        width: 364px;
        height: 364px;
      }
      .rouletteUl {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: Pretendard-SemiBold;
        .rouletteLi {
          position: absolute;
          // left: 50%;
          // top: 50%;
          // top: 52px;
          // margin-left: -26px;
          // transform: translate(-50%, -50%);
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
