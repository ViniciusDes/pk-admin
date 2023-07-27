import { AuthData } from '../../hooks/useAuth/types';

const LOCAL_KEY = '@pk-front:auth';

interface AuthDataResponse {
  authData: AuthData | undefined;
}
class TokenService {
  setAuthData(authData: AuthData) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(authData));
  }

  getAuthData(): AuthDataResponse {
    const authDataString = localStorage.getItem(LOCAL_KEY);
    const authData = authDataString && JSON.parse(authDataString);

    return { authData };
  }

  removeAuthData() {
    localStorage.removeItem(LOCAL_KEY);
  }
}

export default new TokenService();
