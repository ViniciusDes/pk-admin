import { Close } from '@mui/icons-material';
import { AppBar, Box, Button, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { DragEventHandler, forwardRef, ReactNode } from 'react';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FullScreenDialogProps {
  title: string;
  open: boolean;
  onClose: DragEventHandler<HTMLButtonElement>;
  children: ReactNode | ReactNode[];
}

export default function FullScreenDialog(props: FullScreenDialogProps) {
  const { title, open, onClose, children } = props;

  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <Close />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            Concluir
          </Button>
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </Dialog>
  );
}
