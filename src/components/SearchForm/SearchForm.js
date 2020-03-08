import React from 'react';
import { SearchBar } from '../SearchBar';
import { SearchResult } from '../SearchResult';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const SearchForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.text} component="div" variant="body1">
                Search for your Hacker News story below
            </Typography>
            <div className={classes.searchBar}>
                <SearchBar />
            </div>
            <SearchResult />
        </div>
    )
}
