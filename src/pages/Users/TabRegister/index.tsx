import React from 'react';
import * as S from './styles';
import { Col, Row } from '@/styles/global';
import { useUsers } from '@/hooks/useUsers';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Button from '@/components/Button';
import { cepMask, cpfMask, maskCpfCnpj, optionsYesAndNo } from '@/services/global';

const TabRegister: React.FC = () => {
  const { getUsers, formInfo, saveUser } = useUsers();

  const onSubmit = formInfo.handleSubmit(async (data, event) => {
    event?.preventDefault();
    const { name, situation, cpf, email } = data;
    formInfo.trigger();

    saveUser({
      name: name ?? '',
      situation: situation ?? '',
      cpf: cpf ?? '',
      email: email ?? '',
    });
  });

  const { errors } = formInfo.formState;

  const { register } = formInfo;
  return (
    <S.Form onSubmit={onSubmit} id="form-register">
      <Row flWrap gap="10px">
        <Col wd="40rem">
          <Input
            label="Nome"
            name="name"
            id="name"
            error={errors.name?.message}
            register={register}
          />
        </Col>
        <Col minWd="12rem">
          <Input
            label="CPF"
            name="cpf"
            id="cpf"
            error={errors.cpf?.message}
            register={register}
            onKeyUp={(e) => {
              const data = e.target as HTMLInputElement;
              formInfo.setValue('cpf', cpfMask(data.value));
            }}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>
      </Row>
      <Row gap="10px" flWrap>
        <Col minWd="15rem">
          <Input
            label="E-mail"
            name="email"
            id="email"
            type="text"
            error={errors.email?.message}
            register={register}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>
        <Col minWd="5rem" wd="10rem">
          <Select
            id="situation"
            name="situation"
            label="Ativo"
            options={optionsYesAndNo}
            error={errors.situation?.message}
            register={register}
            defaultValue="1"
            flex="1"
            // disabled={Boolean(employeeSelected)}
          />
        </Col>
      </Row>

      <Row>
        <Button
          type="button"
          onClick={(e) => {
            onSubmit();
          }}
          form="form-register"
          rounded
          width="9rem"
          height="2.5rem"
          size="SMALL"
        >
          Salvar
        </Button>
      </Row>
    </S.Form>
  );
};

export default TabRegister;
