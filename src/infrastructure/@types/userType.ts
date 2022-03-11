export interface iUserType {
  id: number;
  name: string;
  email: string;
  password: string;
  city: string;
  birthDate: string;
  number: string;
  role: 'User' | 'Admin';
  posts: any[];
  createdAt: string;
}

export interface iAuthSlice {
  user: iUserType | null;
  isLoading: boolean;
  error: string | null;
}
