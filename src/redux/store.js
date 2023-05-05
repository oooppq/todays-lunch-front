import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import restaurantReducer from './restaurant';
import mapReducer from './map';
import judgeNewReducer from './judgeNew';
import userAuthReducer from './userAuth';

export default configureStore(
  {
    reducer: {
      restaurant: restaurantReducer,
      map: mapReducer,
      judgeNew: judgeNewReducer,
      userAuth: userAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  },
  composeWithDevTools
);
