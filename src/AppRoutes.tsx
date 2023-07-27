import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import PageWrapper from './layout/PageWrapper';

import { AuthProvider } from './hooks/useAuth';
import Company from './pages/Company';
import Users from './pages/Users';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />
        <Route
          path="/*"
          element={
            <AuthProvider>
              <RequireAuth>
                <PageWrapper>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                  <Routes>
                    <Route path="/company" element={<Company />} />
                  </Routes>
                  <Routes>
                    <Route path="/users" element={<Users />} />
                  </Routes>
                </PageWrapper>
              </RequireAuth>
            </AuthProvider>
          }
        />
      </Routes>
    </Router>
  );
}
