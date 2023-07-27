import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import * as S from './styles';
import { CustomButtonProps } from './types';

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  outline,
  onlyText,
  width,
  height,
  loading,
  marginHorizontal,
  marginVertical,
  size,
  color,
  rounded,
  disabled,
  shadow = true,
  ...rest
}) => (
  <S.Container
    type="button"
    outline={outline}
    onlyText={onlyText}
    width={width}
    height={height}
    marginHorizontal={marginHorizontal}
    marginVertical={marginVertical}
    size={size}
    color={color}
    rounded={rounded}
    disabled={disabled}
    shadow={shadow}
    {...rest}
  >
    {loading ? (
      <S.WrapperLoadgin>
        <VscLoading size={30} />
      </S.WrapperLoadgin>
    ) : (
      children
    )}
  </S.Container>
);

export default CustomButton;
