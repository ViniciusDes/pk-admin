import * as React from 'react';

import { Dialog as DialogMUI } from '@mui/material';

export interface DialogProps {
  isOpen: boolean;
  closeModal(): void;
  children: React.ReactNode;
  size: 'lg' | 'md' | 'sm' | 'xl' | 'xs';
}

export const Dialog: React.FC<DialogProps> = ({ children, closeModal, isOpen, size }) => {
  return (
    <div>
      <DialogMUI open={isOpen} onClose={closeModal} maxWidth={size} fullWidth>
        {children}
      </DialogMUI>
    </div>
  );
};
