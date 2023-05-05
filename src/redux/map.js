/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

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
  selectedMarker: null,
};

export const mapSlice = createSlice({
  name: 'map',
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
    setSelectedMarker: (state, action) => {
      state.selectedMarker = action.payload;
    },
  },
});

export const { setIsMap, setMapCenter, setMapLevel, setSelectedMarker } =
  mapSlice.actions;

export default mapSlice.reducer;
