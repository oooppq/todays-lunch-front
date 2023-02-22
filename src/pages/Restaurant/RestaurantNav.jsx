/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsMap,
  setSelectedLocCat,
  setSelectedLocTag,
  setSelectedFoodCat,
  setSearchKeyword,
  setSortBy,
  setOrder,
} from '../../redux/restaurant';
import Dropdown from '../../components/Dropdown';
import {
  RestaurantNavContainer,
  RestaurantNavUp,
  RestaurantNavDown,
  OrderBtn,
  MapBtn,
  SearchBox,
} from './restaurant.style';
import mapIcon from '../../assets/img/map-icon.svg';
import listIcon from '../../assets/img/list-icon.svg';
import searchIcon from '../../assets/img/search-icon.png';
import orderIcon from '../../assets/img/order-icon.png';

const sortOptions = [
  { id: 1, name: '평점순', query: 'rating' },
  { id: 2, name: '리뷰순', query: 'reviewCount' },
];

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
  const sortBy = useSelector((state) => state.restaurant.sortBy);
  const order = useSelector((state) => state.restaurant.order);

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
            placeholder="가고 싶은 음식점을 검색해보세요."
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            value={keyword}
            // 엔터키 누를 때 적용된 조건들이 반영된 상태로 요청되도록 함.
            // onKeyPress는 deprecated 되었기 때문에 onKeyDown을 사용하였다.
            onKeyDown={(e) => {
              const key = e.code;
              switch (key) {
                case 'Enter':
                  dispatch(setSearchKeyword(keyword));
                  break;
                default:
              }
            }}
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
        <Dropdown
          data={sortOptions}
          selected={sortBy}
          setSelected={setSortBy}
        />
        <OrderBtn
          onClick={() => {
            dispatch(setOrder(!order));
          }}
        >
          <img src={orderIcon} alt="" />
        </OrderBtn>
      </RestaurantNavDown>
    </RestaurantNavContainer>
  );
};

export default RestaurantNav;
