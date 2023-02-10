import styled from 'styled-components';
import { commonPageContainerStyle } from '../common.style';

export const RestaurantContainer = styled.div`
  margin: ${commonPageContainerStyle};
`;

export const RestaurantNav = styled.div`
  display: flex;
  height: 30px;
`;

export const MapBtn = styled.div`
  height: 100%;
  img {
    height: 100%;
    margin-right: 10px;
  }
`; // 추후에 img로 교체하여 아이콘으로 대체할 예정

export const SearchBox = styled.form`
  display: flex;

  height: 30px;
  width: 100%;

  input {
    height: 100%;
    flex-grow: 1;
    box-sizing: border-box;
  }
  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0;
    height: 30px;
    img {
      height: 100%;
    }
  }
`;

export const MapContainer = styled.div``;

export const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;
