import React, { Fragment } from 'react';
import './App.css';
import Miembros from '../Miembros/Miembros';
import Guerra from '../Guerra/Guerra';
import GuerraActual from '../GuerraActual/GuerraActual';
import { Switch, Route, Redirect, useHistory, withRouter } from 'react-router-dom';

// ICONS
import SearchIcon from '@material-ui/icons/Search';

import { createStyles, fade, makeStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase/InputBase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

export default withRouter(function () {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Fragment>

      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton> */}
          {/* <MenuIcon /> */}
          <Typography variant="h6">Clash-Amigos</Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />

          <Button onClick={() => history.push('/members')} color="inherit">Miembros</Button>
          <Button onClick={() => history.push('/war')} color="inherit">Guerras</Button>
        </Toolbar>
      </AppBar>

      <div className="container">
        <AppRouting />
      </div>
    </Fragment >
  );
});

function AppRouting() {
  return (
    <Switch>
      <Route path="/members" component={Miembros} />
      <Route path="/war" component={Guerra} exact />
      <Route path="/war/current" component={GuerraActual} exact />
      <Redirect to='/members' from='*' />
    </Switch>
  );
}
