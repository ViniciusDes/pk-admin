import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { Tab as TabMui } from '@mui/material';
import { TabPanelProps, TabsProps } from './types';
import * as S from './styles';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

export default function Tab(props: TabsProps) {
  const { tabItems, onChange, tabActive } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  return (
    <div>
      <Tabs value={tabActive} onChange={handleChange} aria-label="icon position tabs example">
        {tabItems.map((tab) => (
          <TabMui
            key={tab.title.label}
            icon={tab.title.icon}
            label={tab.title.label}
            color="#000"
          />
        ))}
      </Tabs>

      {tabItems.map((tab, i) => (
        <TabPanel key={tab.title.label} value={tabActive} index={i}>
          <S.WrapperItemTab height={tab.height} ovFlwX={tab.ovFlwX} ovFlwY={tab.ovFlwY}>
            {tab.component}
          </S.WrapperItemTab>
        </TabPanel>
      ))}
    </div>
  );
}
