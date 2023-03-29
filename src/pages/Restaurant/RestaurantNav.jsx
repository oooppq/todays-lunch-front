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
  setSelectedRecomCat,
} from '../../redux/restaurant';
import Dropdown from '../../components/Dropdown';
import {
  RestaurantNavContainer,
  RestaurantNavUp,
  RestaurantNavDown,
  MapBtn,
  SearchBox,
} from './restaurant.style';
import mapIcon from '../../assets/img/map-icon.svg';
import listIcon from '../../assets/img/list-icon.svg';
import searchIcon from '../../assets/img/search-icon.svg';

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
  const selectedRecomCat = useSelector(
    (state) => state.restaurant.selectedRecomCat
  );
  const searchKeyword = useSelector((state) => state.restaurant.searchKeyword);
  const sortBy = useSelector((state) => state.restaurant.sortBy);

  const [keyword, setKeyword] = useState(searchKeyword);
  const dispatch = useDispatch();

  const normalDropdownStyle = `
    .selectedLabel {
      background-color: white;
      height: 30px;
      width: 85px;
      font-size: 12px;
      border-radius: 30px;
      border: 1px solid #bdbdbd;
      padding: 0 12px;
      color: #7c7c7c;
      .triangle {
        right: 10px;
        color: #cbcbcb;
      }
    }
  `;

  const recomDropdownStyle = `
    .selectedLabel {
      background-color: white;
      height: 28px;
      font-size: 12px;
      border-radius: 30px;
      border: 1px solid ${
        selectedRecomCat ? selectedRecomCat.color : '#6ab2b2'
      };
      padding: 0 25px 0 14px;
      color: ${selectedRecomCat ? 'black' : '#7c7c7c'};
      .hashTag {
        color: ${selectedRecomCat ? selectedRecomCat.color : '#6ab2b2'}
      }
      .triangle {
        right: 10px;
        color: ${selectedRecomCat ? selectedRecomCat.color : '#6ab2b2'}
      }
          }
  `;

  return (
    <RestaurantNavContainer>
      <RestaurantNavUp>
        <MapBtn
          onClick={() => {
            dispatch(setIsMap());
          }}
        >
          <img
            src={isMap ? listIcon : mapIcon}
            alt=""
            width={isMap ? '32px' : '40px'}
            height={isMap ? '32px' : '40px'}
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
            selected={selectedLocCat}
            setSelected={(toSelect) => {
              dispatch(setSelectedLocCat(toSelect));
            }}
            defaultValue="위치 필터"
            style={normalDropdownStyle}
            isWhole
          />
          <Dropdown
            data={locTag.filter(
              (tag) =>
                selectedLocCat && tag.loc_category_id === selectedLocCat.id
            )}
            selected={selectedLocTag}
            setSelected={(toSelect) => {
              dispatch(setSelectedLocTag(toSelect));
            }}
            defaultValue="상세 위치"
            style={normalDropdownStyle}
            isWhole
          />
          <Dropdown
            data={foodCategory}
            selected={selectedFoodCat}
            setSelected={(toSelect) => {
              dispatch(setSelectedFoodCat(toSelect));
            }}
            defaultValue="음식 필터"
            style={normalDropdownStyle}
            isWhole
          />
          <Dropdown
            data={sortOptions}
            selected={sortBy}
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
            selected={selectedRecomCat}
            setSelected={(toSelect) => {
              dispatch(setSelectedRecomCat(toSelect));
            }}
            defaultValue="추천 필터 설정 💫"
            style={recomDropdownStyle}
            isWhole
            isRecommend
          />
        </div>
      </RestaurantNavDown>
    </RestaurantNavContainer>
  );
};

export default RestaurantNav;
