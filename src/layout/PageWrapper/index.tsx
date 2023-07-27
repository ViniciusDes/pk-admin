import { ReactNode, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from '../Header';
import Menu from '../Menu';
import { Container } from './styles';
import { theme, theme as themeApp } from '../../styles/theme';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface BaseProps {
  children: ReactNode;
}

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  marginTop: '3.25rem',
  background: themeApp.colors.background,
  height: '100vh',
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function PageWrapper(props: BaseProps) {
  const { children } = props;
  const { width } = useWindowDimensions();
  const [openMenu, setOpenMenu] = useState(true);

  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };

  const handleDrawerClose = () => {
    setOpenMenu(false);
  };
  const calcFontSize = (expectedBodyFontSize: number) => {
    return (14 / 16) * expectedBodyFontSize;
  };

  const finalTheme = createTheme({
    components: {
      MuiAppBar: {
        variants: [
          {
            props: {},
            style: {
              height: '3.25rem',
              background: themeApp.colors.primary,
              display: 'flex',
              justifyContent: 'center',
            },
          },
        ],
      },
      MuiDrawer: {
        variants: [
          {
            props: {},
            style: {
              height: '3.25rem',
              background: themeApp.colors.primary,
            },
          },
        ],
        defaultProps: {
          style: {
            background: `${themeApp.colors.primary}!important`,
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          size: 'small',
          style: {
            width: '100%',
            margin: '0.5rem 0px',
            height: '2.82rem',
            // border: `1px solid ${transparentize(0.8, theme.colors.secondary)}`,
            // height: '22.25rem',
            // focus:  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
          },
        },
      },

      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-size: 5px
          }
        `,
      },
    },
    typography: {
      fontFamily: theme.fontFamily.font,
      fontSize: calcFontSize(14),
      // fontSize: 16,
    },
  });

  useEffect(() => {
    if (width <= 1080 && openMenu) {
      setOpenMenu(false);
    } else if (width > 1080 && !openMenu) {
      setOpenMenu(true);
    }
  }, [width]);

  return (
    <Container>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline />
        <Header open={openMenu} handleDrawerOpen={handleDrawerOpen} />
        <Menu handleDrawerClose={handleDrawerClose} open={openMenu} />

        <Main open={openMenu}>{children}</Main>
      </ThemeProvider>
    </Container>
  );
}
