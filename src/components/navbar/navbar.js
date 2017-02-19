import React from 'react';
import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';

const NavBar = props => (
    <AppBar
        title="My Blog"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={props.isOpen ? props.closeDrawer : props.openDrawer}
        style={{ background: props.muiTheme.palette.backgroundColor }}
    />
);

export default muiThemeable()(NavBar);