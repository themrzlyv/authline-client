import { AxiosError } from 'axios';
import { iUserType } from '../../@types/userType';
import API from '../axios/axios';
import Storage from '../Storage';

export default class UserReq {
  public static async getUser(
    rejectWithValue: (value: AxiosError) => void,
  ): Promise<iUserType | void> {
    try {
      const res = await API.get('user', {
        headers: {
          Authorization: `Bearer: ${Storage.getItem('jwt-token')}`,
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
  ): Promise<iUserType | void> {
    try {
      const res = await API.post('auth/login', {
        ...data,
      });
      Storage.setItem('jwt-token', res.data.token);
      return res.data.user;
    } catch (error) {
      return rejectWithValue((error as AxiosError)?.response?.data?.error);
    }
  }
}
