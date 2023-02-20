import styled from 'styled-components';
import { commonPageContainerStyle } from '../common.style';

export const RestaurantContainer = styled.div`
  margin: ${commonPageContainerStyle};
`;

export const RestaurantNavContainer = styled.div`
  height: 50px;
`;

export const RestaurantNavUp = styled.div`
  display: flex;
  height: 30px;
`;

export const RestaurantNavDown = styled.div`
  display: flex;
  height: 20px;
  padding-left: 40px;
  margin-top: 5px;
`;

export const MapBtn = styled.div`
  height: 100%;
  img {
    height: 100%;
    margin-right: 10px;
  }
`;

export const SearchBox = styled.form`
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
  margin-top: 30px;
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
  margin: 30px 0 0 0;
  padding: 0;
`;

export const ListElem = styled.li`
  display: flex;
  height: 100px;
  margin-bottom: 10px;
`;

export const ListElemInfo = styled.div`
  margin-right: auto;
`;

export const ListElemImg = styled.img`
  height: 100%;
`;
