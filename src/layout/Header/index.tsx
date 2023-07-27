import * as React from 'react';

import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, WrapperBtnLogOut } from './styles';
import { Row } from '../../styles/global';
import Tooltip from '../../components/TooltipMui';
import TokenService from '../../services/token';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,

    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header: React.FC<{
  handleDrawerOpen: () => void;
  open: boolean;
}> = ({ open, handleDrawerOpen }) => {
  const tokenService = TokenService;
  return (
    <Container open={open}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <Row jContent="end">
            <IconButton
              onClick={() => {
                tokenService.removeAuthData();
                window.location.reload();
              }}
            >
              <WrapperBtnLogOut>
                <Tooltip title="Sair do sistema">
                  <LogoutIcon htmlColor="#fff" />
                </Tooltip>
              </WrapperBtnLogOut>
            </IconButton>
          </Row>
          {/* <Title>{title}</Title> */}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
