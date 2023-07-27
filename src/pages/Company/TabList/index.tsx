import React from 'react';
import Table from '@/components/Table';
import { GridColDefType } from '@/components/Table/types';
import { Col, IconButton, Row } from '@/styles/global';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from '@/styles/theme';
import { useCompanies } from '@/hooks/useCompanies';

const TabList: React.FC = () => {
  const { listOfCompanies, getCompanies, setDataForm } = useCompanies();

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
            <IconButton type="button" mg="0 5px" onClick={() => setDataForm(params.row)}>
              <EditIcon htmlColor={theme.colors.primary} />
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
    {
      width: 100,
      headerName: 'CEP',
      field: 'address_zip_code',
    },
    {
      width: 150,
      headerName: 'Cidade',
      field: 'address_city',
    },
    {
      width: 100,
      headerName: 'Situação',
      field: 'situation',
    },
  ];

  return (
    <Row>
      <Col minWd="20rem" hgt="30rem">
        <Table
          showInputfilter
          onInputFilterChange={(e) => {
            getCompanies(e);
          }}
          columns={columns}
          rows={listOfCompanies}
          // paginationOnServer
          totRows={listOfCompanies.length}
          onPageChange={() => {}}
        />
      </Col>
    </Row>
  );
};

export default TabList;
