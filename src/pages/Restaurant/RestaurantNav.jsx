/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMap } from '../../redux/map';
import {
  setSelectedFoodCat,
  setSearchKeyword,
  setSortBy,
  setSelectedRecomCat,
} from '../../redux/restaurant';
import Dropdown from '../../components/Dropdown';
import {
  RestaurantNavContainer,
  RestaurantNavUp,
  RestaurantNavDown,
  MapBtn,
  SearchBox,
  normalDropdownStyle,
  recomDropdownStyle,
} from './restaurant.style';
import mapIcon from '../../assets/img/map-icon.png';
import listIcon from '../../assets/img/list-icon.png';
import searchIcon from '../../assets/img/search-icon.png';
import { useCategory } from './restaurant.helpers';

const sortOptions = [
  { id: 1, name: '평점순', query: 'rating' },
  { id: 2, name: '리뷰순', query: 'reviewCount' },
];

const RestaurantNav = ({
  locCategory,
  locTag,
  foodCategory,
  recomCategory,
}) => {
  const isMap = useSelector((state) => state.map.isMap);
  const { changeSelectedLocCat, changeSelectedLocTag } = useCategory();
  const restaurantState = useSelector((state) => state.restaurant);

  const [keyword, setKeyword] = useState(restaurantState.searchKeyword);
  const dispatch = useDispatch();

  return (
    <RestaurantNavContainer>
      <RestaurantNavUp>
        <MapBtn
          onClick={() => {
            dispatch(setIsMap(!isMap));
          }}
        >
          <img
            src={isMap ? listIcon : mapIcon}
            alt=""
            // width={isMap ? '32px' : '40px'}
            // height={isMap ? '32px' : '40px'}
            width="40"
            height="40"
          />
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
              if (e.nativeEvent.isComposing) return;
              const key = e.code;
              switch (key) {
                case 'Enter':
                  dispatch(setSearchKeyword(keyword));
                  dispatch(setIsMap(false));
                  e.target.blur();
                  break;
                default:
              }
            }}
          />
          <button
            type="button"
            onClick={() => {
              dispatch(setSearchKeyword(keyword));
              dispatch(setIsMap(false));
            }}
          >
            <img src={searchIcon} alt="" />
          </button>
        </SearchBox>
      </RestaurantNavUp>
      <RestaurantNavDown>
        <div className="up">
          <Dropdown
            data={locCategory}
            selected={restaurantState.selectedLocCat}
            setSelected={(toSelect) => {
              changeSelectedLocCat(toSelect);
            }}
            defaultValue="위치 필터"
            style={normalDropdownStyle}
            isWhole
          />
          <Dropdown
            data={locTag.filter(
              (tag) =>
                restaurantState.selectedLocCat &&
                tag.loc_category_id === restaurantState.selectedLocCat.id
            )}
            selected={restaurantState.selectedLocTag}
            setSelected={(toSelect) => {
              changeSelectedLocTag(toSelect);
            }}
            defaultValue="상세 위치"
            style={normalDropdownStyle}
            isWhole
          />
          <Dropdown
            data={foodCategory}
            selected={restaurantState.selectedFoodCat}
            setSelected={(toSelect) => {
              dispatch(setSelectedFoodCat(toSelect));
            }}
            defaultValue="음식 필터"
            style={normalDropdownStyle}
            isWhole
          />
          <Dropdown
            data={sortOptions}
            selected={restaurantState.sortBy}
            setSelected={(toSelect) => {
              dispatch(setSortBy(toSelect));
            }}
            style={normalDropdownStyle}
            isWhole={false}
          />
        </div>
        <div className="down">
          <Dropdown
            data={recomCategory}
            selected={restaurantState.selectedRecomCat}
            setSelected={(toSelect) => {
              dispatch(setSelectedRecomCat(toSelect));
            }}
            defaultValue="추천 필터 설정 💫"
            style={recomDropdownStyle(restaurantState.selectedRecomCat)}
            isWhole
            isRecommend
          />
        </div>
      </RestaurantNavDown>
    </RestaurantNavContainer>
  );
};

export default RestaurantNav;
