import { AuthData } from '../../hooks/useAuth/types';
import api from '../api';
import { LoginRequestParams } from './types';
import TokenService from '../token';
import { DefaultResponseApi } from '@/interfaces/global';

export default class AuthService {
  async signIn(params: LoginRequestParams): Promise<DefaultResponseApi<AuthData>> {
    const response = await api.post('/users/authenticate', params);

    return response.data;
  }

  async signOut() {
    const tokenService = TokenService;
    tokenService.removeAuthData();
  }
}
