import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './styles';
import { NavBar } from '../NavBar';
import { SearchForm } from '../SearchForm';

const App = () => (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <SearchForm />
      </ThemeProvider>
    </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
