import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useAuth0 } from '../../auth/auth0-wrapper';
import { MenuDrawer } from '../drawer/MenuDrawer';
import { NavLinks } from '../../NavLinks';

import './Navbar.scss';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const { loading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  function handleDrawerOpen() {
    setDrawerOpen(true);
  }
  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  return (
    <>
      <div className="nav-root">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" onClick={handleDrawerOpen}
                        className="nav-menu-button" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link to={'/'}>
              <img
                src="https://placeholder.pics/svg/360x122/FFFFFF-FFFFFF/000000-000000/Logo"
                title="placeholder logo"
                alt="placeholder-logo"
                className="placeholder-logo"
              />
            </Link>
            <Typography variant="h6" className="nav-title">
            </Typography>
            {!loading && !isAuthenticated && (<Button color="inherit" onClick={() => loginWithRedirect({})}>Login</Button>)}
            {isAuthenticated && (
              <>
                <Button color="secondary" variant="contained" onClick={() => logout()}>Log out</Button>
                {user && (
                  <Avatar alt="avatar" src={user.picture} className="nav-avatar"/>
                )}
              </>
            )}
          </Toolbar>
        </AppBar>
        <MenuDrawer links={NavLinks} isOpen={drawerOpen} direction='ltr' drawerClose={handleDrawerClose} />
      </div>
    </>
  );
};

export default NavBar;

