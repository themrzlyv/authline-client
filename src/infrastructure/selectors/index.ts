import { RootState } from './../Global/redux/Store';
export const layoutSelector = (state: RootState) => state.reducer.layout;
export const authSelector = (state: RootState) => state.reducer.auth;
