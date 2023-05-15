/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// 초기 상태
const initialState = {
  selectedLocCat: null,
  selectedLocTag: null,
  selectedFoodCat: null,
  selectedRecomCat: null,
  searchKeyword: '',
  sortBy: { id: 1, name: '평점순', query: 'rating' },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setSelectedLocCat: (state, action) => {
      state.selectedLocCat = action.payload;
      state.pageNum = 1;
    },
    setSelectedLocTag: (state, action) => {
      state.selectedLocTag = action.payload;
      state.pageNum = 1;
    },
    setSelectedFoodCat: (state, action) => {
      state.selectedFoodCat = action.payload;
      state.pageNum = 1;
    },
    setSelectedRecomCat: (state, action) => {
      state.selectedRecomCat = action.payload;
      state.pageNum = 1;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
      state.pageNum = 1;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.pageNum = 1;
    },
  },
});

export const {
  setSelectedLocCat,
  setSelectedLocTag,
  setSelectedFoodCat,
  setSelectedRecomCat,
  setSearchKeyword,
  setSortBy,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
