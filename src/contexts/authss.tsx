// import { createContext, ReactNode, useMemo, useState } from 'react';
// import { Auth } from '../interfaces';

// interface AuthContextInterface {
//   isAuthenticated: boolean;
//   authenticate: Function;
// }

// const AuthContext = createContext<AuthContextInterface>({});

// export default AuthContext;

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem('clinuxIsAuthenticated') === 'true',
//   );
//   const [auth, setAuth] = useState<any>(JSON.parse(localStorage.getItem('clinuxAuth') || '{}'));

//   const authenticate = (auth: Auth) => {
//     setIsAuthenticated(true);
//     setAuth(auth);

//     localStorage.setItem('clinuxIsAuthenticated', 'true');
//     localStorage.setItem('clinuxAuth', JSON.stringify(auth));
//   };

//   const value = useMemo(
//     () => ({ isAuthenticated, auth, authenticate }),
//     [isAuthenticated, auth, authenticate],
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
