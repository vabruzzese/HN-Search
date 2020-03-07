import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './styles';
import { NavBar } from '../NavBar';

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
      </ThemeProvider>
    </div>
  );
}
