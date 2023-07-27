import React, { useEffect, useState } from 'react';
import Toolbar from '@/layout/Toolbar';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import * as S from './styles';
import Button from '@/components/Button';
import Tab from '@/components/Tab';
import TabList from './TabList';
import { CompaniesProvider, useCompanies } from '@/hooks/useCompanies';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TabRegister from './TabRegister';

const Company: React.FC = () => {
  const { getCompanies, tabActive, setTabActive, handleNewCompany } = useCompanies();

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <S.Container>
      <S.WrapperToolbar>
        <Toolbar description="Empresas" />
        <Button
          type="button"
          rounded
          size="SMALL"
          height="2.2rem"
          width="12rem"
          onClick={handleNewCompany}
        >
          Nova empresa
        </Button>
      </S.WrapperToolbar>

      <Tab
        tabActive={tabActive}
        onChange={(index) => setTabActive(index)}
        tabItems={[
          {
            component: <TabList />,
            title: {
              icon: <FormatListBulletedIcon />,
              label: 'Listagem',
            },
          },

          {
            component: <TabRegister />,
            title: {
              icon: <EngineeringIcon />,
              label: 'Cadastrar/editar',
            },
          },
        ]}
      />
    </S.Container>
  );
};

export default () => (
  <CompaniesProvider>
    <Company />
  </CompaniesProvider>
);
