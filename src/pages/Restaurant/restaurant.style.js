import styled from 'styled-components';

export const RestaurantContainer = styled.div`
  margin-top: 24px;
`;

export const RestaurantNavContainer = styled.div``;

export const RestaurantNavUp = styled.div`
  display: flex;
  height: 40px;
  margin: 0 12px;
`;

export const RestaurantNavDown = styled.div`
  .up {
    display: flex;
    justify-content: space-between;
    height: 32px;
    margin: 20px 19px 10px 19px;
  }
  .down {
    height: 28px;
    margin: 0 19px;
  }
`;

export const MapBtn = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  img {
  }
`;

export const SearchBox = styled.div`
  display: flex;

  height: 40px;
  flex-grow: 1;
  background-color: #f4f4f4;
  border-radius: 20px;
  input {
    height: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    border: none;
    margin-left: 20px;
    border-radius: 20px;
    font-size: 16px;
    background-color: transparent;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #b6b6b6;
  }
  button {
    padding: 0;
    margin: auto 15px;
    height: 23px;
    width: 23px;
    img {
      height: 23px;
      width: 23px;
    }
  }
`;

// elements for Map
export const MapContainer = styled.div`
  .emptyDiv {
    height: 20px;
    width: 100%;
    box-shadow: 0px 5px 4px -3px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 99;
  }
`;

export const CustomOverlayElem = styled.div`
  display: block;
  background: #50627f;
  color: #fff;
  text-align: center;
  height: 24px;
  line-height: 22px;
  border-radius: 4px;
  padding: 0px 10px;
  position: absolute;
  top: -35px;
  left: 20px;
`;

// elements for List
export const ListContainer = styled.div`
  margin: 6px 26px 0 26px;
`;
export const ListUl = styled.ul`
  margin: 0;
  padding: 0;
  height: 471px;
  overflow-y: auto;
`;

export const ListElemContainer = styled.li`
  display: flex;
  height: 118px;
  margin: 19px 0 0 0;
  padding-bottom: 19px;
  border-bottom: 1px solid #f0f0f0;
`;

export const ListElemImg = styled.img`
  height: 100%;
  width: 40%;
  padding-right: 16px;
  border-radius: 3px;
  box-sizing: border-box;
`;

export const ListElemInfo = styled.div`
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  .title {
    font-size: 18px;
  }
  .etc {
    display: flex;
    flex-direction: column;
    margin-top: 3px;
    width: 140px;
    font-size: 13px;
    color: #636363;
    .categories {
      margin-right: 5px;
    }
    .reviewRate {
      margin-top: 4px;
      margin-bottom: 34px;
      font-size: 12px;
      color: #356461;
      // text-align: right;
    }
    .btnContainer {
      margin-bottom: 6px;
      button {
        font-size: 11px;
        border: 1px solid #bdbdbd;
        border-radius: 10px;
        margin-right: 4px;
        padding: 0 10px;
        padding-top: 2px;
        height: 21px;
        color: #5e5e5e;
        a {
          text-decoration: none;
          color: #5e5e5e;
        }
      }
    }
  }
`;

export const WishAndRoulette = styled.div`
  text-align: right;
  button {
    width: 37px;
    height: 37px;
    box-sizing: border-box;
    border: 1px solid #bdbdbd;
    border-radius: 50%;
    margin: 8px 0px;
    img {
      margin-top: 2px;
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 15px;
  button {
    border: none;
    padding: 0;
    img {
      width: 20px;
    }
  }
  .pageInfo {
    margin: 0 10px;
    span {
      color: grey;
      font-size: 13px;
    }
  }
  .emptyDiv {
    width: 40px;
  }
`;
