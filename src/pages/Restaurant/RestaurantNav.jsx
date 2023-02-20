/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsMap,
  setSelectedLocCat,
  setSelectedLocTag,
  setSelectedFoodCat,
  setSearchKeyword,
} from '../../stores/restaurant';
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

const RestaurantNav = ({ locCategory, locTag, foodCategory }) => {
  const isMap = useSelector((state) => state.restaurant.isMap);
  const selectedLocCat = useSelector(
    (state) => state.restaurant.selectedLocCat
  );
  const selectedLocTag = useSelector(
    (state) => state.restaurant.selectedLocTag
  );
  const selectedFoodCat = useSelector(
    (state) => state.restaurant.selectedFoodCat
  );
  const searchKeyword = useSelector((state) => state.restaurant.searchKeyword);
  const [keyword, setKeyword] = useState(searchKeyword);
  const dispatch = useDispatch();

  return (
    <RestaurantNavContainer>
      <RestaurantNavUp>
        <MapBtn
          onClick={() => {
            dispatch(setIsMap());
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
            value={keyword}
          />

          <button
            type="button"
            onClick={() => {
              dispatch(setSearchKeyword(keyword));
            }}
          >
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
          data={locTag.filter(
            (tag) => tag.loc_category_id === selectedLocCat.id
          )}
          selected={selectedLocTag}
          setSelected={setSelectedLocTag}
        />
        <Dropdown
          data={foodCategory}
          selected={selectedFoodCat}
          setSelected={setSelectedFoodCat}
        />
      </RestaurantNavDown>
    </RestaurantNavContainer>
  );
};

export default RestaurantNav;
