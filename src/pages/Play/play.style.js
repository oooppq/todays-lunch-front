import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const PlayContainer = styled.div`
  overflow: clip;
  .fullErrorContainer {
    display: flex;
    align-items: center;
    background-color: #fefbe8;
    padding: 10px;

    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;
    .warningIcon {
      width: 50px;
      margin-right: 10px;
    }
    .warningMessage {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .toAddContainer {
    background-color: #fefbe8;
    font-size: 14px;
    padding: 7px 20px;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    .toAddBtn {
      border-bottom: 1px solid;
      font-size: 15px;
      font-family: Pretendard-SemiBold;
    }
  }
  .playMain {
    padding: 0 13px;
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
        margin: 0 10px 0 20px;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        // overflow-x: auto;
        .restaurantLi {
          white-space: nowrap;
          box-sizing: border-box;
          height: 24px;
          margin-bottom: 10px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          border: 1px solid #bdbdbd;
          border-radius: 5px;
          padding: 0 6px;
          // box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1);
          .restaurantName {
            font-size: 14px;
            height: 100%;
            padding-right: 6px;
            margin-right: 6px;
            border-right: 1px solid #bdbdbd;
          }
          .deleteRestaurantBtn {
            height: 15px;
            width: 14px;
            img {
              height: 14px;
              width: 14px;
            }
          }
        }
        .moreRestaurantBtn {
          // color: #6ab2b2;
          background-color: #6ab2b2;
          color: white;
          border: 1px solid #6ab2b2;
          // box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          font-family: Pretendard-SemiBold;
          height: 24px;
          padding: 3px 6px;
        }
      }
    }
    .needMoreRestaurantOuter {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .moreRestaurantImg {
        width: 300px;
        margin-bottom: 20px;
      }
      .moreRestaurantText {
        text-align: center;
        margin-bottom: 20px;
        line-height: 24px;
        span {
          font-family: Pretendard-SemiBold;
        }
      }
      .moreRestaurantBtn {
        background-color: #6ab2b2;
        color: white;
        padding: 7px 12px;
        font-size: 18px;
        font-family: Pretendard-SemiBold;
        border-radius: 10px;
      }
    }
    .rouletteOuter {
      margin-top: 10px;
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
            // background-color: rgba(255, 255, 255, 0.3);
            // padding: 2px 6px;
            // border-radius: 5px;
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
        margin-top: 20px;
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
