import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDrawer, openDrawer } from './app.redux';
import '../../style/style.css';

import Navbar from '../navbar/navbar';
import Drawer from '../drawer/drawer';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props} />
                <Drawer {...this.props} />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ app }) {
    return { ...app };
}

export default connect(mapStateToProps, { openDrawer, closeDrawer })(App);