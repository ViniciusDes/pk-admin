export interface ResponseLogIn {
  token?: string;
}

export interface LoginRequestParams {
  email: string;
  password: string;
  token_name: string;
}
