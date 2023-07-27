import { createTheme, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './AppRoutes';

import { BackdropProvider } from './hooks/useLoading';
import Global from './styles/global';
import { theme, Theme } from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';

const themeMUI = createTheme({
  typography: {
    fontFamily: ['Open Sans'].join(','),
    fontSize: 15,
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.primary,
      contrastText: '#fff',
    },
  },
});

function App() {
  const queryClient = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <ThemeProvider theme={themeMUI}>
          <Global />

          <BackdropProvider>
            <AppRoutes />
          </BackdropProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
