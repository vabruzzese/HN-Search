import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

export const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <SearchIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        <strong>Hacker News Search</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
