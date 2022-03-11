import { iUserType } from './userType';

export interface iLoginResponse {
  token: string;
  user: iUserType;
}
