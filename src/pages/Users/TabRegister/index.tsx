import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Col, IconButton, Row } from '@/styles/global';
import { useUsers } from '@/hooks/useUsers';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Button from '@/components/Button';
import { cepMask, cpfMask, maskCpfCnpj, optionsYesAndNo } from '@/services/global';
import AutoComplete from '@/components/AutoComplete';
import { CompanyData } from '@/services/companies/types';
import CompaniesService from '@/services/companies';
import Table from '@/components/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridColDefType } from '@/components/Table/types';
import { theme } from '@/styles/theme';

const TabRegister: React.FC = () => {
  const { getUsers, formInfo, saveUser, userSelected } = useUsers();
  const companyService = new CompaniesService();
  const [listOfComapanies, setListOfCompanies] = useState<CompanyData[]>([]);
  const [valueFilterCompanies, setValueFilterCompanies] = useState('');

  const onSubmit = formInfo.handleSubmit(async (data, event) => {
    event?.preventDefault();
    const { name, situation, cpf, email, company } = data;
    formInfo.trigger();

    saveUser({
      name: name ?? '',
      situation: situation ?? '',
      cpf: cpf ?? '',
      email: email ?? '',
      id_company: company,
    });
  });

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = async (filter?: string) => {
    const res = await companyService.getAll(filter);

    setListOfCompanies(res);
  };

  const optionsCompany = listOfComapanies.map((company) => ({
    label: `${company.cod_company} - ${company.fantasy_name}`,
    value: company.id,
  }));

  const { errors } = formInfo.formState;

  const { register, control } = formInfo;

  const columns: GridColDefType[] = [
    {
      width: 80,
      headerName: 'Ações',
      field: 'id',
      align: 'center',
      renderCell(params) {
        return (
          <>
            <IconButton mg="0 5px" type="button">
              <DeleteIcon htmlColor={theme.colors.primary} />
            </IconButton>
          </>
        );
      },
    },
    {
      width: 100,
      headerName: 'Cód.',
      field: 'cod_company',
    },
    {
      width: 150,
      headerName: 'CPF/CNPJ',
      field: 'cpf_cpnj',
      flex: 1,
    },
    {
      width: 400,
      headerName: 'Razão social',
      field: 'corporate_name',
      flex: 1,
    },
    {
      width: 400,
      headerName: 'Nome fantasia',
      field: 'fantasy_name',
      flex: 1,
    },
  ];

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

      <Row gap="10px">
        <Col gap="10px" hgt="20rem">
          <Row jContent="space-between" wd="100%">
            <h3>Empresas</h3>

            <Row algItems="end" fl={1} jContent="end" gap="10px">
              <Col minWd="10rem" wd="20rem">
                <AutoComplete
                  options={optionsCompany}
                  label="Empresa"
                  name="company"
                  error={errors.company?.message}
                  onInputChange={(v) => setValueFilterCompanies(v)}
                  control={control}
                />
              </Col>

              <Col wd="10rem" mg="0.5rem 0px">
                <Button
                  type="button"
                  onClick={(e) => {
                    // onSubmit();
                  }}
                  rounded
                  width="9rem"
                  height="2.5rem"
                  size="SMALL"
                >
                  Adicionar empresa
                </Button>
              </Col>
            </Row>
          </Row>

          <Table
            showInputfilter={false}
            columns={columns}
            rows={userSelected?.companies ?? []}
            totRows={userSelected?.companies.length ?? 0}
            onPageChange={() => {}}
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
