import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import restaurantReducer from './restaurant';

export default configureStore(
  { reducer: { restaurant: restaurantReducer } },
  composeWithDevTools
);
