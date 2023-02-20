/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const defaultCenter = {
  latitude: 37.5509442,
  longitude: 126.9410023,
};
const initialState = {
  isMap: false,
  selectedLocCat: { id: 1, name: '위치', ...defaultCenter },
  selectedLocTag: { id: 1, name: '상세위치', ...defaultCenter },
  selectedFoodCat: { id: 1, name: '음식종류' },
  searchKeyword: '',
};
export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setIsMap: (state) => {
      state.isMap = !state.isMap;
    },
    setSelectedLocCat: (state, action) => {
      state.selectedLocCat = action.payload;
      // location category가 변경될 때에는 location tag를 초기값으로 업데이트 해줘야 함.
      // 이 때, 좌표는 변경된 location category의 좌표로 설정하도록 한다.
      state.selectedLocTag = {
        ...initialState.selectedLocTag,
        latitude: state.selectedLocCat.latitude,
        longitude: state.selectedLocCat.longitude,
      };
    },
    setSelectedLocTag: (state, action) => {
      state.selectedLocTag = action.payload;
    },
    setSelectedFoodCat: (state, action) => {
      state.selectedFoodCat = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const {
  setIsMap,
  setSelectedLocCat,
  setSelectedLocTag,
  setSelectedFoodCat,
  setSearchKeyword,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;

// // 초기 state 정의
// const initialState = {
//   isMap: false,
//   selectedLocCat: 0,
//   selectedLocTag: 0,
//   selectedFoodCat: 0,
//   searchKeyword: '',
// };

// // Action types
// const SET_SELECTED_LOC_CAT = 'restaurant/SET_SELECTED_LOC_CAT';
// const SET_SELECTED_LOC_TAG = 'restaurant/SET_SELECTED_LOC_TAG';
// const SET_SELECTED_FOOD_CAT = 'restaurant/SET_SELECTED_FOOD_CAT';
// const SET_SEARCH_KEYWORD = 'restaurant/SET_SEARCH_KEYWORD';

// // Action functions

// export const setSelectedLocCat = (idx) => ({
//   type: SET_SELECTED_LOC_CAT,
//   idx,
// });
// export const setSelectedLocTag = (idx) => ({
//   type: SET_SELECTED_LOC_TAG,
//   idx,
// });
// export const setSelectedFoodCat = (idx) => ({
//   type: SET_SELECTED_FOOD_CAT,
//   idx,
// });
// export const setSearchKeyword = (keyword) => ({
//   type: SET_SEARCH_KEYWORD,
//   keyword,
// });

// // Reducers

// const restaurantReducer = (action, state = initialState) => {
//   switch (action.type) {
//     case SET_SELECTED_LOC_CAT:
//       return {
//         ...state,
//         selectedLocCat: action.idx,
//       };
//     case SET_SELECTED_LOC_TAG:
//       return {
//         ...state,
//         selectedLocTag: action.idx,
//       };
//     case SET_SELECTED_FOOD_CAT:
//       return {
//         ...state,
//         selectedFoodCat: action.idx,
//       };
//     case SET_SEARCH_KEYWORD:
//       return {
//         ...state,
//         searchKeyword: action.keyword,
//       };
//     default:
//       return state;
//   }
// };

// export default restaurantReducer;
