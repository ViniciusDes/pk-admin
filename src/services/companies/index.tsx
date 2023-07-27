import api from '../api';
import { CompanyData, PostCompanyData } from './types';
import { DefaultResponseApi } from '@/interfaces/global';

export default class CompaniesService {
  async getAll(filter?: string): Promise<CompanyData[]> {
    const response = await api.get('/companies', {
      params: {
        filter: filter ?? '',
      },
    });

    return response.data.data;
  }

  async postCompany(data: PostCompanyData): Promise<DefaultResponseApi<any>> {
    const response = await api.post('/companies', data);

    return response.data;
  }
}
