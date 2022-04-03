import { CarModelType } from './carModelTypes';

export interface CarBrandType {
  id: string;
  brandName: string;
  image: string;
  models?: CarModelType[];
}

export interface CarBrandsResponse {
  total: number;
  pages: number;
  carBrands: CarBrandType[];
}
