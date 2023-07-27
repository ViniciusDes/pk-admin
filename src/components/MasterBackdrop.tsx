import { MouseEventHandler } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

interface MasterBackdropProps {
  open: boolean;
  onClose?: MouseEventHandler<HTMLElement>;
}

export default function MasterBackdrop(props: MasterBackdropProps) {
  const { open, onClose } = props;

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={onClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

MasterBackdrop.defaultProps = {
  onClose: () => {},
};
