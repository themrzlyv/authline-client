import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import rootReducer from './rootReducer';

export const store = configureStore({
  devTools: process.env.REACT_APP_NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    process.env.REACT_APP_NODE_ENV !== 'production'
      ? getDefaultMiddleware().concat(reduxLogger)
      : getDefaultMiddleware(),
  reducer: {
    reducer: rootReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
