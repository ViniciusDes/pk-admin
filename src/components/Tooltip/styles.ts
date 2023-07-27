import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
  span {
    width: 16rem;
    background: ${lighten(0.3, '#E80000')} !important;
    padding: 0.8rem;
    border-radius: 0.4rem;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 1.2rem);
    left: 50%;
    transform: translateX(-50%);
    color: ${lighten(0.1, '#000')};
    &::before {
      content: '';
      border-style: solid;
      border-color: ${() => `${lighten(0.3, '#E80000')} transparent `} !important;
      border-width: 0.6rem 0.6rem 0 0.6rem;
      box-shadow: none;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: initial;
  }
`;
