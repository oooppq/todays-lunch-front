import styled from 'styled-components';
import { commonPageContainerStyle } from '../common.style';

export const RestaurantContainer = styled.div`
  margin: ${commonPageContainerStyle};
`;

export const RestaurantNavContainer = styled.div`
  height: 70px;
`;

export const RestaurantNavUp = styled.div`
  display: flex;
  height: 32px;
`;

export const RestaurantNavDown = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-top: 10px;
`;
export const OrderBtn = styled.button`
-webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 0;
  padding:0;
  height: 25px;
  img {
    height: 100%;
  }
}`;

export const MapBtn = styled.div`
  height: 100%;
  img {
    height: 100%;
    margin-right: 10px;
  }
`;

export const SearchBox = styled.div`
  display: flex;

  height: 30px;
  width: 100%;
  border: 1px solid #b8b8b8;
  border-radius: 20px;
  input {
    height: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    border: none;
    margin-left: 10px;
    border-radius: 20px;
  }
  input:focus {
    outline: none;
  }
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    margin: auto 5px;
    height: 23px;
    img {
      height: 100%;
    }
  }
`;

// elements for Map
export const MapContainer = styled.div`
  margin-top: 20px;
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
export const ListUl = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
`;

export const ListElem = styled.li`
  display: flex;
  height: 100px;
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
`;

export const ListElemInfo = styled.div`
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  .etc {
    font-size: 13px;
    color: #636363;
    .reviewRate {
      color: #356461;
    }
    .btnContainer {
      margin-top: 10px;
      button {
        font-size: 11px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        border: 1px solid #bdbdbd;
        border-radius: 10px;
        margin-right: 10px;
        height: 23px;
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
  padding-right: 20px;
  border-radius: 3px;
  box-sizing: border-box;
`;
