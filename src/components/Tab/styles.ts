import styled from 'styled-components';
import { TabItemStyleProps } from './types';

export const WrapperItemTab = styled.div<TabItemStyleProps>`
  padding-top: 1rem;
  overflow-y: ${({ ovFlwY }) => ovFlwY ?? 'unset'};
  overflow-x: ${({ ovFlwX }) => ovFlwX ?? 'unset'};
  height: ${({ height }) => height ?? 'auto'};
`;
