import React from 'react';
import * as PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import './MenuDrawer.scss';
import { Link } from 'react-router-dom';

export const MenuDrawer = (props) => {
  const { direction, isOpen, drawerClose, links } = props;

  return (
    <Drawer
      className="nav-drawer"
      variant="persistent"
      anchor={direction === 'ltr' ? 'left' : 'right'}
      open={isOpen}
      classes={{
        paper: 'nav-drawer-paper',
      }}
    >
      <div className="nav-drawer-header">
        <IconButton onClick={drawerClose}>
          {direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
        </IconButton>
      </div>
      <Divider />
      <List>
        {links && links.map((navLink) => {
          return (
            <Link to={navLink.link} key={navLink.name} onClick={drawerClose}>
              <ListItem button>
                <ListItemIcon><Icon>{navLink.icon}</Icon></ListItemIcon>
                <ListItemText primary={navLink.name}/>
              </ListItem>
            </Link>
          )
        })}
      </List>
    </Drawer>
  )
};

MenuDrawer.propTypes = {
  direction: PropTypes.string,
  drawerClose: PropTypes.func,
  isOpen: PropTypes.bool,
  links: PropTypes.array,
};
