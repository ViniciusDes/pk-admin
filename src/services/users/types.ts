import { CompanyData } from '../companies/types';

export interface UserData {
  id: number;
  name: string;
  situation: number;
  cpf: string;
  email: string;
  created_at: string;
}

export interface UserFullData extends UserData {
  companies: CompanyData[];
}

export interface PostUserData {
  id?: number;
  name: string;
  situation: number;
  cpf: string;
  email: string;
  id_company: number;
}
