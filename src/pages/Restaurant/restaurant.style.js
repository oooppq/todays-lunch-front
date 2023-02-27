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
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
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

export const RestaurantNavDown = styled.div`
  display: flex;
  justify-content: space-between;
  height: 32px;
  margin: 20px 19px 0 19px;
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
  margin: 25px 26px 0 26px;
`;
export const ListUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListElem = styled.li`
  display: flex;
  height: 118px;
  margin: 19px 0;
  padding-bottom: 19px;
  border-bottom: 1px solid #f0f0f0;
`;

export const ListElemInfo = styled.div`
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  .title {
    font-size: 18px;
  }
  .etc {
    font-size: 13px;
    color: #636363;
    .reviewRate {
      margin-top: 4px;
      margin-bottom: 28px;
      font-size: 12px;
      color: #356461;
      // text-align: right;
    }
    .btnContainer {
      margin-top: 9px;
      margin-bottom: 6px;
      button {
        font-size: 11px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: 1px solid #bdbdbd;
        border-radius: 10px;
        margin-right: 9px;
        padding: 0 11px;
        height: 21px;
        color: #5e5e5e;
        a {
          text-decoration: none;
          color: #5e5e5e;
        }
      }
    }
  }
  div {
    padding: 1px 0;
  }
`;

export const ListElemImg = styled.img`
  height: 100%;
  width: 40%;
  padding-right: 16px;
  border-radius: 3px;
  box-sizing: border-box;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 15px;
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
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
