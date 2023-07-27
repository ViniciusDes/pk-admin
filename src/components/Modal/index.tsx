import React from 'react';
import ReactModal, { Styles } from 'react-modal';
import { ModalProps } from './types';

export const ModalStyles: Styles = {
  overlay: {
    zIndex: 9,
    background: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    inset: 'auto',
    overflow: 'auto',
    background: '#fff',
    height: '55%',
    width: '50%',
    border: 'none',
    borderRadius: '2px',
    padding: '0.6rem 1rem',
    boxShadow: '0 14px 20px rgba(0,0,0,0.18), 0 10px 10px rgba(0,0,0,0.16)',
  },
};

// const fixedStyles: Styles = {
//   overlay: {
//     zIndex: 9999,
//     background: rgba(255, 255, 255, 0.7),
//   },
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     border: 'none',
//     // borderRadius: 20,
//     padding: 0,
//     boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
//   },
// };

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  onAfterOpen,
  customStyled,
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      onAfterClose={onAfterOpen}
      ariaHideApp={false}
      style={customStyled || ModalStyles}
      className="react-modal-container"
    >
      {children}
    </ReactModal>
  );
};

export default React.memo(Modal);
