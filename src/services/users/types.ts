export interface UserData {
  id: number;
  name: string;
  situation: number;
  cpf: string;
  email: string;
  created_at: string;
}

export interface PostUserData {
  id?: number;
  name: string;
  situation: number;
  cpf: string;
  email: string;
}
