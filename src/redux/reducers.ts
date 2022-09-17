import {combineReducers} from '@reduxjs/toolkit';
import Constant from './constants';
import Profile from './profile';
import tokenReducer from './tokens/reducer';
import Tournment from './tournment';
import User from './user';
import loadingSlice from './_loading';

const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  tokens: tokenReducer,
  [Constant.slice.name]: Constant.slice.reducer,
  [User.slice.name]: User.slice.reducer,
  [Tournment.slice.name]: Tournment.slice.reducer,
  [Profile.slice.name]: Profile.slice.reducer,
});

export default combinedReducer;
