import { combineReducers } from 'redux';
import userSlice from '../../../ui/Auth/common/redux/Auth.slice';
import layoutSlice from '../../../components/Layout/common/redux/Layout.slice';

const rootReducer = combineReducers({
  layout: layoutSlice,
  auth: userSlice,
});

export default rootReducer;
