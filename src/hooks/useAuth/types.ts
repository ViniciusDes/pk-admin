import { UserData } from '@/services/users/types';

export interface AuthData {
  isAuthenticated: boolean;
  token: string;
  user?: UserData;
}
