import React from 'react';

import { ThemeProvider } from 'styled-components';

import Home from './src/pages/Home';

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
