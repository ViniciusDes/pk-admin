/* eslint-disable quote-props */
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StoreIcon from '@mui/icons-material/Store';
import { Item, TitleHeader, UserP, Wrapper, WrapperHeaderMenu } from './styles';
import { theme as themeApp } from '../../styles/theme';
import { useAuth } from '@/hooks/useAuth';
import { useLocation, useParams, useRoutes } from 'react-router-dom';

interface MenuData {
  text: string;
  isSubMenu: boolean;
  icon: React.ReactElement;
  itens?: MenuData[];
}
interface MenuProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  background: themeApp.colors.primary,
  justifyContent: 'flex-end',
  minHeight: '3.25rem !important',
}));

const Menu: React.FC<MenuProps> = ({ handleDrawerClose, open }) => {
  const drawerWidth = 240;
  const { authData } = useAuth();

  const title = import.meta.env.VITE_TITLE_APPLICATION;
  const [indexItemMenuSelected, setIndexItemMenuSelected] = React.useState(0);
  const themeMui = useTheme();

  const location = useLocation();
  const menuOptions = [
    {
      route: '/company',
      description: 'Empresas',
      icon: <StoreIcon />,
      rolePermissions: ['worker', 'manager', 'admin'],
    },
    {
      route: '/users',
      description: 'Usuários',
      icon: <PeopleIcon />,
      rolePermissions: ['worker', 'manager', 'admin'],
    },
  ];

  return (
    <>
      <Drawer
        color={themeApp.colors.primary}
        sx={{
          'width': drawerWidth,
          'flexShrink': 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,

            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className="header-menu">
          <TitleHeader>{title}</TitleHeader>
          <IconButton onClick={handleDrawerClose}>
            {themeMui.direction === 'ltr' ? (
              <ChevronLeftIcon htmlColor="#fff" />
            ) : (
              <ChevronRightIcon htmlColor="#fff" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <WrapperHeaderMenu>
          <div>
            <UserP>{authData.user?.name}</UserP>
            {/* <span>
              <b>Grupo:</b> {authData.user?.role}
            </span> */}
          </div>
        </WrapperHeaderMenu>
        <Divider />
        <Wrapper>
          {menuOptions.map((menu, i) => {
            const active = location.pathname === menu.route;
            // if (!menu.rolePermissions.includes(authData?.user?.role ?? '')) {
            //   return '';
            // }
            return (
              <Item
                key={menu.route}
                to={menu.route}
                active={String(active)}
                onClick={() => setIndexItemMenuSelected(i)}
              >
                {menu.icon} <p className="description-menu">{menu.description}</p>
              </Item>
            );
          })}
        </Wrapper>
      </Drawer>
    </>
  );
};

export default Menu;
