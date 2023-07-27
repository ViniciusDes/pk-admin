import api from '../api';
import { UserData, PostUserData } from './types';
import { DefaultResponseApi } from '@/interfaces/global';

export default class UsersService {
  async getAll(filter?: string): Promise<UserData[]> {
    const response = await api.get('/users', {
      params: {
        filter: filter ?? '',
      },
    });

    return response.data.data;
  }

  async postUser(data: PostUserData): Promise<DefaultResponseApi<any>> {
    const response = await api.post('/users', data);

    return response.data;
  }
}
