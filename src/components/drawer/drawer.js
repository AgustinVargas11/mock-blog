import React from 'react';
import { makeStyle } from '../../utils/styleMaker';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Navbar from '../navbar/navbar';


const pad = makeStyle('padding', '1em 1.3em');

import { theme } from '../../utils/styleMaker';

const NavDrawer = props => (
    <Drawer open={props.isOpen}>
        <Navbar {...props}/>
        <MenuItem style={pad}>Sign In</MenuItem>
        <MenuItem style={pad}>Topics</MenuItem>
    </Drawer>
);

export default NavDrawer;