import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface iState {
  posts: any[];
}

const initialState: iState = {
  posts: [],
};

const appSlice = createSlice({
  name: 'App',
  initialState: initialState,
  reducers: {
    setPosts: (state: iState, action: PayloadAction<any[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = appSlice.actions;

export default appSlice.reducer;
