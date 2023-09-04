/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { authStates } from '../libs/utils';

const initialState = {
  state: authStates.INITIAL,
  id: null,
  email: null,
  accessToken: null,
  refreshToken: null,
  expireTime: null,
  temporary: false,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setState: (state, action) => {
      switch (action.payload) {
        case authStates.INITIAL:
          state.state = authStates.INITIAL;
          break;
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
        case authStates.INVALID:
          state.state = authStates.INVALID;
          break;
        case authStates.ERROR:
          state.state = authStates.ERROR;
          break;
        default:
      }
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
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
    setTemporary: (state, action) => {
      state.temporary = action.payload;
    },
    reset: (state) => {
      Object.assign(state, { ...initialState, state: state.state });
    },
  },
});

export const {
  setState,
  setId,
  setEmail,
  setAccessToken,
  setRefreshToken,
  setExpireTime,
  setTemporary,
  reset,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
