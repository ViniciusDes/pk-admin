import React from 'react';
import Table from '@/components/Table';
import { GridColDefType } from '@/components/Table/types';
import { Col, IconButton, Row } from '@/styles/global';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from '@/styles/theme';
import { useUsers } from '@/hooks/useUsers';

const TabList: React.FC = () => {
  const { listOfUsers, getUsers, setDataForm } = useUsers();

  const columns: GridColDefType[] = [
    {
      width: 80,
      headerName: 'Ações',
      field: 'id',
      align: 'center',
      renderCell(params) {
        return (
          <>
            <IconButton type="button" mg="0 5px" onClick={() => setDataForm(params.row)}>
              <EditIcon htmlColor={theme.colors.primary} />
            </IconButton>
          </>
        );
      },
    },
    {
      width: 200,
      headerName: 'Nome',
      field: 'name',
      flex: 1,
    },
    {
      width: 150,
      headerName: 'CPF',
      field: 'cpf',
      flex: 1,
    },
    {
      width: 100,
      headerName: 'E-mail',
      field: 'email',
      flex: 1,
    },
  ];

  return (
    <Row>
      <Col minWd="20rem" hgt="30rem">
        <Table
          showInputfilter
          onInputFilterChange={(e) => {
            getUsers(e);
          }}
          columns={columns}
          rows={listOfUsers}
          // paginationOnServer
          totRows={listOfUsers.length}
          onPageChange={() => {}}
        />
      </Col>
    </Row>
  );
};

export default TabList;
