import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ReactNode, useEffect, useState } from 'react';
import { Col, Row } from '../../styles/global';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Label from '../Label';

interface TableProps {
  columns: GridColDef[];
  rows: any;
  extraComponentsFilter?: ReactNode;
  paginationOnServer?: boolean;
  onPageChange: (page_: number) => void;
  onInputFilterChange?: (value_: string) => void;
  totRows: number;
  showInputfilter: boolean;
}

export default function Table(props: TableProps) {
  const {
    columns,
    rows,
    paginationOnServer,
    onPageChange,
    totRows,
    showInputfilter,
    onInputFilterChange,
    extraComponentsFilter,
  } = props;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      // eslint-disable-next-line no-unused-expressions
      onInputFilterChange && onInputFilterChange(searchTerm);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {showInputfilter && (
        <Row jContent="start">
          <Col wd="25rem">
            <Input
              height="2.2rem"
              label="Filtro"
              name="filter"
              id="filter"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </Col>
          {extraComponentsFilter && extraComponentsFilter}
        </Row>
      )}
      <DataGrid
        componentsProps={{
          pagination: {
            labelRowsPerPage: 'Máx. itens por pág.',
            labelDisplayedRows: ({ from, to, count }: any) => {
              return `${from}–${to} de ${count !== -1 ? count : `mais ${to}`}`;
            },
          },
        }}
        style={{
          textTransform: 'uppercase',
        }}
        rowHeight={35}
        headerHeight={40}
        rows={rows}
        rowCount={totRows}
        columns={columns}
        pagination
        pageSize={30}
        onPageChange={(e) => onPageChange(e + 1)}
        rowsPerPageOptions={[30]}
        paginationMode={paginationOnServer ? 'server' : 'client'}
        localeText={{
          footerTotalRows: 'Total Rows:',
          footerTotalVisibleRows: (visibleCount, totalCount) =>
            `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
          footerRowSelected(count) {
            return `${count} linha(s) selecionada(s)`;
          },
        }}
      />
    </div>
  );
}
