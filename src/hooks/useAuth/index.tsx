import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { SetStateInterface } from '../../interfaces/global';
import tokenService from '../../services/token';
import { AuthData } from './types';

interface EmployeeContextInterface {
  authData: AuthData;
  setAuthData: SetStateInterface<AuthData>;
  logOut: () => void;
}

const EmployeeContext = createContext<EmployeeContextInterface>({} as EmployeeContextInterface);

export function AuthProvider({ children }: { children: ReactNode }) {
  const authDataStorage = tokenService.getAuthData();

  const [authData, setAuthData] = useState<AuthData>(
    authDataStorage.authData || {
      isAuthenticated: false,
      token: '',
    },
  );

  const logOut = () => {
    setAuthData({
      isAuthenticated: false,
      token: '',
    });
    tokenService.removeAuthData();
  };

  useEffect(() => {
    if (authData.token) {
      tokenService.setAuthData(authData);
    }
  }, [authData]);

  const value = useMemo(
    () => ({
      authData,
      setAuthData,
      logOut,
    }),
    [authData],
  );

  return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>;
}

export function useAuth() {
  const context = useContext(EmployeeContext);

  return context;
}
