/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// 초기 상태(와 그에 필요한 변수)
const defaultCenter = {
  latitude: 37.5509442,
  longitude: 126.9410023,
};
const initialState = {
  isMap: false, // Map or List
  mapCenter: {
    lat: defaultCenter.latitude,
    lng: defaultCenter.longitude,
  },
  mapLevel: 4,
  // 검색 관련
  selectedLocCat: null,
  selectedLocTag: null,
  selectedFoodCat: null,
  selectedRecomCat: null,
  searchKeyword: '',
  sortBy: { id: 1, name: '평점순', query: 'rating' },
  pageNum: 1,
  // 지도 관련
  selectedMarker: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setIsMap: (state) => {
      state.isMap = !state.isMap;
    },
    setMapCenter: (state, action) => {
      state.mapCenter = {
        lat: action.payload.lat,
        lng: action.payload.lng,
      };
    },
    setMapLevel: (state, action) => {
      state.mapLevel = action.payload;
    },
    setSelectedLocCat: (state, action) => {
      state.selectedLocCat = action.payload;
      // location category가 변경될 때에는 location tag를 초기값으로 업데이트 해줘야 함.
      // 이 때, 좌표는 변경된 location category의 좌표로 설정하도록 한다.
      state.selectedLocTag = null;
      if (action.payload)
        state.mapCenter = {
          lat: action.payload.latitude,
          lng: action.payload.longitude,
        };
    },
    setSelectedLocTag: (state, action) => {
      state.selectedLocTag = action.payload;
      if (action.payload)
        state.mapCenter = {
          lat: action.payload.latitude,
          lng: action.payload.longitude,
        };
      state.mapLevel = 4;
    },
    setSelectedFoodCat: (state, action) => {
      state.selectedFoodCat = action.payload;
    },
    setSelectedRecomCat: (state, action) => {
      state.selectedRecomCat = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },
    setSelectedMarker: (state, action) => {
      state.selectedMarker = action.payload;
    },
  },
});

export const {
  setIsMap,
  setMapCenter,
  setMapLevel,
  setSelectedLocCat,
  setSelectedLocTag,
  setSelectedFoodCat,
  setSelectedRecomCat,
  setSearchKeyword,
  setSortBy,
  setPageNum,
  setSelectedMarker,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
