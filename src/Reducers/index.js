import { combineReducers } from 'redux';

import HeaderReducer from './HeaderReducer';
import BodyReducer from './BodyReducer';
export default combineReducers({ header: HeaderReducer, body: BodyReducer });