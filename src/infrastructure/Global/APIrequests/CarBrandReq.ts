import { AxiosError } from 'axios';
import { CarBrandsResponse, CarBrandType } from '../../@types/carBrandTypes';
import API from '../axios/axios';

export default class CarBrandReq {
  public static async getCarBrands(
    page?: number,
    size?: number,
  ): Promise<CarBrandsResponse | void> {
    try {
      const res = await API.get(`/carBrand?page=${page}&size=${size}`);
      return res.data;
    } catch (error) {
      throw new Error((error as AxiosError)?.response?.data?.error);
    }
  }

  public static async getSingleCarBrand(id: number): Promise<CarBrandType | void> {
    try {
      const res = await API.get(`/carBrand/${id}`);
      return res.data;
    } catch (error) {
      throw new Error((error as AxiosError)?.response?.data?.error);
    }
  }
}
