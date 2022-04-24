import React from 'react';

import Home from './src/pages/Home';

import { AppProvider } from './src/hooks';
import { ToggleThemeProvider } from './src/hooks/useDarkMode';

const App = () => {
  return (
    <ToggleThemeProvider>
      <AppProvider>
        <Home />
      </AppProvider>
    </ToggleThemeProvider>
  );
};

export default App;
