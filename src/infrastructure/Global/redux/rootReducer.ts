import { combineReducers } from 'redux';
import AppSlice from '../../../App.Slice';

const rootReducer = combineReducers({
  app: AppSlice,
});

export default rootReducer;
