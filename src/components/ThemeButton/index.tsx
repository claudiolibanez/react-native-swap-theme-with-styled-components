import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface ThemeButtonProps extends TouchableOpacityProps {
  children: string;
}

const ThemeButton = ({ children, ...rest }: ThemeButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Title>{children}</S.Title>
    </S.Container>
  );
};

export { ThemeButton };
