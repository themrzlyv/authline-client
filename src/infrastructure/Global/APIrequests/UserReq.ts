import { AxiosError } from 'axios';
import { iRegistrationUserType } from '../../@types/registrationUserTypes';
import { iUserType } from '../../@types/userType';
import API from '../axios/axios';
import Storage from '../Storage';

export default class UserReq {
  public static async getAccessToken(
    rejectWithValue: (value: AxiosError) => void,
  ): Promise<{ accessToken: string } | void> {
    try {
      const res = await API.get('auth/refreshToken');
      return res.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError)?.response?.data?.error);
    }
  }

  public static async getUser(
    accessToken: string,
    rejectWithValue: (value: AxiosError) => void,
  ): Promise<iUserType | void> {
    try {
      const res = await API.get('user', {
        headers: {
          Authorization: `Bearer: ${accessToken}`,
        },
      });
      return res.data.user;
    } catch (error) {
      return rejectWithValue((error as AxiosError)?.response?.data?.error);
    }
  }

  public static async loginUser(
    data: { email: string; password: string },
    rejectWithValue: (value: AxiosError) => void,
  ): Promise<{ user: iUserType; accessToken: string } | void> {
    try {
      const res = await API.post('auth/login', {
        ...data,
      });
      Storage.setItem('firstLogin', true);
      return res.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError)?.response?.data?.error);
    }
  }

  public static async registerUser(data: iRegistrationUserType): Promise<void | AxiosError> {
    try {
      const res = await API.post('auth/registration', {
        ...data,
      });
      return res.data;
    } catch (error) {
      throw new Error((error as AxiosError)?.response?.data?.error);
    }
  }

  public static async logOutUser(
    accessToken: string,
    rejectWithValue: (value: AxiosError) => void,
  ): Promise<{ message: string } | void> {
    try {
      const res = await API.get('auth/logout', {
        headers: {
          Authorization: `Bearer: ${accessToken}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError)?.response?.data?.error);
    }
  }
}
