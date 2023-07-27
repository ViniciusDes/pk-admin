import React from 'react';

import * as S from './styles';
import { Col, Row } from '@/styles/global';
import { useCompanies } from '@/hooks/useCompanies';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Button from '@/components/Button';
import { cepMask, maskCpfCnpj, optionsYesAndNo } from '@/services/global';

const TabRegister: React.FC = () => {
  const { formInfo, saveCompany } = useCompanies();

  const onSubmit = formInfo.handleSubmit(async (data, event) => {
    event?.preventDefault();
    const {
      cod_company,
      cpf_cpnj,
      corporate_name,
      fantasy_name,
      address_zip_code,
      address_state,
      address_city,
      address_district,
      address_street,
      address_complement,
      situation,
    } = data;
    formInfo.trigger();

    saveCompany({
      cod_company: cod_company,
      cpf_cpnj: cpf_cpnj,
      corporate_name: corporate_name,
      fantasy_name: fantasy_name,
      address_zip_code: String(address_zip_code).replace('-', ''),
      address_state: address_state ?? '',
      address_city: address_city ?? '',
      address_district: address_district ?? '',
      address_street: address_street ?? '',
      address_complement: address_complement ?? '',
      situation: situation ?? '',
    });
  });

  const { errors } = formInfo.formState;

  const { register } = formInfo;
  return (
    <S.Form onSubmit={onSubmit} id="form-register">
      <Row flWrap gap="10px">
        <Col wd="10rem">
          <Input
            label="Cód. empresa"
            name="cod_company"
            id="cod_company"
            placeholder="Ex: 0101"
            error={errors.cod_company?.message}
            register={register}
          />
        </Col>
        <Col minWd="12rem" wd="15rem">
          <Input
            label="CPF/CNPJ"
            name="cpf_cpnj"
            id="cpf_cpnj"
            error={errors.cpf_cpnj?.message}
            register={register}
            onKeyUp={(e) => {
              const data = e.target as HTMLInputElement;
              formInfo.setValue('cpf_cpnj', maskCpfCnpj(data.value));
            }}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>
        <Col minWd="15rem">
          <Input
            label="Razão social"
            name="corporate_name"
            id="corporate_name"
            type="text"
            error={errors.corporate_name?.message}
            register={register}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>
        <Col minWd="15rem">
          <Input
            label="Nome fantasia"
            name="fantasy_name"
            id="fantasy_name"
            type="text"
            error={errors.fantasy_name?.message}
            register={register}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>
      </Row>
      <Row gap="10px" flWrap>
        <Col minWd="5rem" wd="8rem">
          <Input
            label="CEP"
            name="address_zip_code"
            id="address_zip_code"
            type="text"
            maxLength={9}
            error={errors.address_zip_code?.message}
            register={register}
            onKeyUp={(e) => {
              const data = e.target as HTMLInputElement;

              formInfo.setValue('address_zip_code', cepMask(data.value));
            }}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>

        <Col minWd="5rem" wd="10rem">
          <Input
            label="Estado"
            name="address_state"
            id="address_state"
            type="text"
            error={errors.address_state?.message}
            register={register}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>

        <Col minWd="10rem">
          <Input
            label="Cidade"
            name="address_city"
            id="address_city"
            type="text"
            error={errors.address_city?.message}
            register={register}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>

        <Col minWd="15rem">
          <Input
            label="Endereço"
            name="address_district"
            id="address_district"
            type="text"
            error={errors.address_district?.message}
            register={register}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>
      </Row>
      <Row gap="10px" flWrap>
        <Col minWd="10rem">
          <Input
            label="Bairro"
            name="address_street"
            id="address_street"
            type="text"
            error={errors.address_street?.message}
            register={register}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>

        <Col minWd="20rem">
          <Input
            label="Complemento"
            name="address_complement"
            id="address_complement"
            type="text"
            error={errors.address_complement?.message}
            register={register}
            // disabled={Boolean(employeeSelected)}
          />
        </Col>

        <Col minWd="20rem">
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
