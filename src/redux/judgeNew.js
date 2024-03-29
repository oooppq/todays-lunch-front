/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurantName: null,
  restaurantImage: null,
  foodCategory: null,
  locationCategory: null,
  // locationTag: null,
  recommendCategory: [],
  latitude: null,
  longitude: null,
  address: null,
  introduction: '',
};

export const judgeNewSlice = createSlice({
  name: 'judgeNew',
  initialState,
  reducers: {
    setRestaurantName: (state, action) => {
      state.restaurantName = action.payload;
    },
    setRestaurantImage: (state, action) => {
      state.restaurantImage = action.payload;
    },
    setFoodCategory: (state, action) => {
      state.foodCategory = action.payload;
    },
    setLocationCategory: (state, action) => {
      state.locationCategory = action.payload;
    },
    // setLocationTag: (state, action) => {
    //   state.locationTag = action.payload;
    // },
    setRecommendCategory: (state, action) => {
      state.recommendCategory = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setIntroduction: (state, action) => {
      state.introduction = action.payload;
    },
    resetRestaurantInfo: (state) => {
      Object.assign(state, {
        restaurantName: null,
        latitude: null,
        longitude: null,
        address: null,
        locationCategory: null,
      });
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setRestaurantName,
  setRestaurantImage,
  setFoodCategory,
  setLocationCategory,
  // setLocationTag,
  setRecommendCategory,
  setLatitude,
  setLongitude,
  setAddress,
  setIntroduction,
  resetRestaurantInfo,
  reset,
} = judgeNewSlice.actions;

export default judgeNewSlice.reducer;
