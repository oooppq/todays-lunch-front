import { combineReducers } from 'redux';
import restaurantReducer from './restaurant';

const rootReducer = combineReducers({ restaurantReducer });

export default rootReducer;
