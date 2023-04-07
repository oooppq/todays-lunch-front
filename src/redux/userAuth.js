/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { authState } from '../libs/userAuth.helpers';

const initialState = {
  id: null,
  state: authState.UNAUTHORIZED,
  token: null,
  refreshToken: null,
};

export const userAuthSlice = createSlice({
  name: ' userAuth',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setState: (state, action) => {
      switch (action.payload) {
        case authState.AUTHORIZED:
          state.state = authState.UNAUTHORIZED;
          break;
        case authState.UNAUTHORIZED:
          state.state = authState.UNAUTHORIZED;
          break;
        case authState.EXPIRED:
          state.state = authState.EXPIRED;
          break;
        default:
      }
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { setId, setState, setToken, setRefreshToken } =
  userAuthSlice.actions;

export default userAuthSlice.reducer;
