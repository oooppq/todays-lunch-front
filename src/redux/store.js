import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './restaurant';

export default configureStore({ reducer: { restaurant: restaurantReducer } });
