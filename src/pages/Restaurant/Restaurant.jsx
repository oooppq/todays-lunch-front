import React, { useState } from 'react';
import {
  RestaurantContainer,
  RestaurantNav,
  MapBtn,
  SearchBox,
} from './restaurant.style';
import Map from './Map';
import List from './List';
import mapIcon from '../../assets/img/map-icon.png';
import listIcon from '../../assets/img/list-icon.png';
import searchIcon from '../../assets/img/search-icon.png';

const Restaurant = () => {
  const [isMap, setMap] = useState(false);

  return (
    <RestaurantContainer>
      <RestaurantNav>
        <MapBtn
          onClick={() => {
            setMap(!isMap);
          }}
        >
          <img src={isMap ? listIcon : mapIcon} alt="" />
        </MapBtn>
        <SearchBox>
          <input type="text" />
          <button type="button">
            <img src={searchIcon} alt="" />
          </button>
        </SearchBox>
      </RestaurantNav>
      {isMap ? <Map /> : <List />}
    </RestaurantContainer>
  );
};

export default Restaurant;
