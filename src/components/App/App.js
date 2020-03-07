import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './styles';
import { NavBar } from '../NavBar';
import { SearchBar } from '../SearchBar';

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <SearchBar />
      </ThemeProvider>
    </div>
  );
}
