/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { authStates } from '../libs/utils';

const initialState = {
  state: authStates.UNAUTHORIZED,
  accessToken: null,
  refreshToken: null,
  expireTime: null,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setState: (state, action) => {
      switch (action.payload) {
        case authStates.AUTHORIZED:
          state.state = authStates.AUTHORIZED;
          break;
        case authStates.UNAUTHORIZED:
          state.state = authStates.UNAUTHORIZED;
          break;
        case authStates.EXPIRED:
          state.state = authStates.EXPIRED;
          break;
        case authStates.PENDING:
          state.state = authStates.PENDING;
          break;
        case authStates.ERROR:
          state.state = authStates.ERROR;
          break;
        default:
      }
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setExpireTime: (state, action) => {
      state.expireTime = action.payload;
    },
  },
});

export const { setState, setAccessToken, setRefreshToken, setExpireTime } =
  userAuthSlice.actions;

export default userAuthSlice.reducer;
