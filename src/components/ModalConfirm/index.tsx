import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { ModalConfirmProps } from './types';
import * as S from './styles';
import { Dialog } from '../Dialog';
import { Row } from '@/styles/global';
import { theme } from '@/styles/theme';
import CustomButton from '../CustomButton';

const ModalConfirm: React.FC<ModalConfirmProps> = ({ isOpen, closeModal, onYesClick, message }) => {
  return (
    <Dialog size="sm" isOpen={isOpen} closeModal={closeModal}>
      <S.Container>
        <S.Row>
          <FiAlertCircle color="#FAAD14" size={22} />
          <S.Text>{message}</S.Text>
        </S.Row>
        <S.WrapperButtons>
          <Row gap="10px" jContent="end">
            <CustomButton
              color={theme.colors.text}
              bckColor={theme.colors.base}
              type="button"
              rounded
              size="SMALL"
              height="2.2rem"
              width="6rem"
              onClick={closeModal}
            >
              Não
            </CustomButton>
            <CustomButton
              type="button"
              rounded
              size="SMALL"
              height="2.2rem"
              width="6rem"
              onClick={onYesClick}
            >
              Sim
            </CustomButton>
          </Row>
        </S.WrapperButtons>
      </S.Container>
    </Dialog>
  );
};

export default ModalConfirm;
