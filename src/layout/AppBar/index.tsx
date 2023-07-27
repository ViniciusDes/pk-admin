import { Toolbar, AppBar as MuiAppBar } from '@mui/material';
import { Title } from './styles';

// import logo from '/assets/clinux.svg';

export default function AppBar() {
  const title = import.meta.env.VITE_TITLE_APPLICATION;
  return (
    <MuiAppBar position="absolute">
      <Toolbar style={{ minHeight: '46px', justifyContent: 'center' }}>
        <Title>{title ?? 'NOME_APP'}</Title>
      </Toolbar>
    </MuiAppBar>
  );
}
