import React, { ReactNode } from 'react';
import * as S from './styles';

import { useDarkMode } from '../../hooks/useDarkMode';

import { ThemeButton } from '../../components/ThemeButton';

const Home = () => {
  const { toggleTheme } = useDarkMode();

  const handleToggleTheme = async () => {
    await toggleTheme();
  };

  return (
    <S.Container>
      <ThemeButton onPress={handleToggleTheme}>teste</ThemeButton>
    </S.Container>
  );
};

export default Home;
