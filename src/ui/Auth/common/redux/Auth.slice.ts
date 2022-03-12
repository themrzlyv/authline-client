import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { iAuthSlice, iUserType } from '../../../../infrastructure/@types/userType';
import { ErrorQuery } from '../../../../infrastructure/data/Queries/errorQueries';
import { QueryId } from '../../../../infrastructure/data/Queries/QueryId';
import UserReq from '../../../../infrastructure/Global/APIrequests/UserReq';

const initialState: iAuthSlice = {
  user: null,
  isLoading: false,
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async (_, { rejectWithValue }) => {
  return await UserReq.getUser(rejectWithValue);
});

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    return await UserReq.loginUser(data, rejectWithValue);
  },
);

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<iUserType | void>) => {
      if (action.payload) {
        state.user = action.payload;
      }
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action: PayloadAction<any>) => {
      state.user = null;
      state.error = action.payload;
      state.isLoading = false;
      toast.error(action.payload, { toastId: ErrorQuery.login });
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.user = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<iUserType | void>) => {
      if (action.payload) {
        state.user = action.payload;
      }
      state.isLoading = false;
      state.error = null;
      toast.success('Logged in successfully', { toastId: QueryId.LOGIN_SUCCESS });
    });
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.user = null;
      state.error = action.payload;
      state.isLoading = false;
      toast.error(action.payload, { toastId: ErrorQuery.login });
    });
  },
});

export const { logOutUser } = authSlice.actions;

export default authSlice.reducer;
