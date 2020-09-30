import React, { Fragment } from 'react';
import { Switch, Route, Redirect, useHistory, withRouter } from 'react-router-dom';
import './App.css';
import Miembros from '../Miembros/Miembros';
import Clan from '../Clan/Clan';
import GuerraActual from '../GuerraActual/GuerraActual';
import Guerras from '../Guerras/Guerras';

// ICONS
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { createStyles, fade, makeStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase/InputBase';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Hidden from '@material-ui/core/Hidden/Hidden';

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
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const navigatorTo = (path: string) => {
      history.push(path);
      setAnchorEl(null);
   }

   return (
      <Fragment>
         <AppBar position="static">
            <Toolbar>
               {/* <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton> */}
               {/* <MenuIcon /> */}
               <Typography variant="h6">COC-AMIGOS</Typography>

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

               <Hidden xsDown>
                  <Button onClick={() => navigatorTo('/members')} color="inherit">Miembros</Button>
                  <Button onClick={() => navigatorTo('/wars')} color="inherit">Guerras</Button>
               </Hidden>

               <Hidden smUp>
                  <IconButton
                     aria-label="more"
                     aria-controls="long-menu"
                     aria-haspopup="true"
                     onClick={handleClick}>
                     <MoreVertIcon style={{ color: 'white' }} />
                  </IconButton>
               </Hidden>
               <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                  <MenuItem onClick={() => navigatorTo('/members')}>Miembros</MenuItem>
                  <MenuItem onClick={() => navigatorTo('/wars')}>Guerras</MenuItem>
               </Menu>
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
         <Route path="/members/:tag" component={Miembros} />
         <Route path="/wars" component={Guerras} exact />
         <Route path="/wars/current" component={GuerraActual} exact />
         <Route path="/clan/:tag" component={Clan} exact />
         <Redirect to='/members' from='*' />
      </Switch>
   );
}
