import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './useDarkMode';

import { theme as defaultTheme } from '../styles';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const { theme } = useDarkMode();

  return (
    <ThemeProvider
      theme={theme === 'dark' ? defaultTheme.dark : defaultTheme.light}
    >
      {children}
    </ThemeProvider>
  );
};

export { AppProvider };
