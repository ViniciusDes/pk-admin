import { UserData } from '@/services/user/types';

export interface AuthData {
  isAuthenticated: boolean;
  token: string;
  user?: UserData;
}
