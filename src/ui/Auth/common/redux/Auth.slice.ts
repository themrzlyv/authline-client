import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { iAuthSlice, iUserType } from '../../../../infrastructure/@types/userType';
import { ErrorQuery } from '../../../../infrastructure/data/Queries/errorQueries';
import { QueryId } from '../../../../infrastructure/data/Queries/QueryId';
import UserReq from '../../../../infrastructure/Global/APIrequests/UserReq';
import Storage from '../../../../infrastructure/Global/Storage';

const initialState: iAuthSlice = {
  user: null,
  accessToken: null,
  isLoading: false,
  error: null,
  loginModal: false,
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (accessToken: string, { rejectWithValue }) => {
    return await UserReq.getUser(accessToken, rejectWithValue);
  },
);

export const getAccessToken = createAsyncThunk(
  'user/getAccessToken',
  async (_, { rejectWithValue }) => {
    return await UserReq.getAccessToken(rejectWithValue);
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    return await UserReq.loginUser(data, rejectWithValue);
  },
);

export const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (accessToken: string, { rejectWithValue }) => {
    return await UserReq.logOutUser(accessToken, rejectWithValue);
  },
);

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    toggleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      logOutUser.fulfilled,
      (state, action: PayloadAction<{ message: string } | void>) => {
        state.accessToken = null;
        state.user = null;
        state.error = null;
        state.isLoading = false;
        Storage.removeItem('firstLogin');
        if (action.payload) {
          toast.success(action.payload.message);
        }
      },
    );
    builder.addCase(logOutUser.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.isLoading = false;
      toast.error(action.payload, { toastId: ErrorQuery.login });
    });

    builder.addCase(
      getAccessToken.fulfilled,
      (state, action: PayloadAction<{ accessToken: string } | void>) => {
        if (action.payload) {
          state.accessToken = action.payload.accessToken;
        }
      },
    );
    builder.addCase(getAccessToken.rejected, (state, action: PayloadAction<any>) => {
      state.user = null;
      state.accessToken = null;
      state.error = action.payload;
      state.isLoading = false;
      toast.error(action.payload, { toastId: ErrorQuery.login });
    });

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
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<{ user: iUserType; accessToken: string } | void>) => {
        if (action.payload) {
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
        }
        state.isLoading = false;
        state.error = null;
        state.loginModal = false;
        toast.success('Logged in successfully', { toastId: QueryId.LOGIN_SUCCESS });
      },
    );
    builder.addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
      state.user = null;
      state.accessToken = null;
      state.error = action.payload;
      state.isLoading = false;
      toast.error(action.payload, { toastId: ErrorQuery.login });
    });
  },
});

export const { toggleLoginModal } = authSlice.actions;

export default authSlice.reducer;
