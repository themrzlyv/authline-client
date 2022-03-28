import { AxiosError } from "axios";
import API from "../axios/axios";

export default class CarBrandReq {
  public static async getCarBrands(page?: number ,size?: number): Promise<any | void> {
    try {
      const res = await API.get(`/carBrand?page=${page}&size=${size}`);
      return res.data;
    } catch (error) {
      throw new Error((error as AxiosError)?.response?.data?.error);
    }
  }
}
