import React, { ReactNode } from 'react';

export interface TabItemStyleProps {
  ovFlwX?: string;
  ovFlwY?: string;
  height?: string;
}

interface TabProps extends TabItemStyleProps {
  title: {
    label: string;
    icon: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  };
  component: ReactNode;
}

type TabItemsProps = Array<TabProps>;
export interface TabsProps extends TabItemStyleProps {
  tabActive: number;
  onChange: (index_: number) => void;
  tabItems: TabItemsProps;
}

export interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}
