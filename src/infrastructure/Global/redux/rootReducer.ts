import { combineReducers } from 'redux';
import userSlice from '../../../ui/Auth/common/redux/Auth.slice';

const rootReducer = combineReducers({
  auth: userSlice,
});

export default rootReducer;
