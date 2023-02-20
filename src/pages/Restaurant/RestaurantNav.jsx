/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import {
  RestaurantNavContainer,
  RestaurantNavUp,
  RestaurantNavDown,
  MapBtn,
  SearchBox,
} from './restaurant.style';
import mapIcon from '../../assets/img/map-icon.png';
import listIcon from '../../assets/img/list-icon.png';
import searchIcon from '../../assets/img/search-icon.png';

const RestaurantNav = ({ isMap, setIsMap }) => {
  const locCategory = ['위치', '서강대학교', '신촌역', '대흥역'];
  const locTag = ['상세위치', '정문', '남문', '후문'];
  const foodCategory = ['음식종류', '한식', '일식', '중식'];
  const [selectedLocCat, setSelectedLocCat] = useState(locCategory[0]);
  const [selectedLocTag, setSelectedLocTag] = useState(locTag[0]);
  const [selectedFoodCat, SetSelectedFoodCat] = useState(foodCategory[0]);
  const [keyword, setKeyword] = useState('');
  const searchOnSubmit = () => {
    console.log(
      `?keyword=${keyword}&location-category=${selectedLocCat}&location-tag=${selectedLocTag}&food-category=${selectedFoodCat}`
    );
  };
  return (
    <RestaurantNavContainer>
      <RestaurantNavUp>
        <MapBtn
          onClick={() => {
            setIsMap(!isMap);
          }}
        >
          <img src={isMap ? listIcon : mapIcon} alt="" />
        </MapBtn>
        <SearchBox>
          <input
            type="text"
            placeholder="먹고 싶은 음식을 검색해보세요."
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <button type="button" onClick={searchOnSubmit}>
            <img src={searchIcon} alt="" />
          </button>
        </SearchBox>
      </RestaurantNavUp>
      <RestaurantNavDown>
        <Dropdown
          data={locCategory}
          selected={selectedLocCat}
          setSelected={setSelectedLocCat}
        />
        <Dropdown
          data={selectedLocCat !== locCategory[0] ? locTag : [locTag[0]]}
          selected={selectedLocTag}
          setSelected={setSelectedLocTag}
        />
        <Dropdown
          data={foodCategory}
          selected={selectedFoodCat}
          setSelected={SetSelectedFoodCat}
        />
      </RestaurantNavDown>
    </RestaurantNavContainer>
  );
};

export default RestaurantNav;
