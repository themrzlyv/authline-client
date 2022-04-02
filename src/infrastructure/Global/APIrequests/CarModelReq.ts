import { AxiosError } from 'axios';
import { CarModelType } from '../../@types/carModelTypes';
import API from '../axios/axios';

export default class CarModelReq {
  public static async getCarModel(id: string): Promise<CarModelType | void> {
    try {
      const res = await API.get(`/carModel/${id}`);
      return res.data;
    } catch (error) {
      throw new Error((error as AxiosError)?.response?.data?.error);
    }
  }
}
