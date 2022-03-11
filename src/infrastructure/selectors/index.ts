import { RootState } from './../Global/redux/Store';
export const authSelector = (state: RootState) => state.reducer.auth;
