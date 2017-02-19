import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostNew from './components/postNew/postNew';
import PostShow from './components/postShow/postShow';
import Stepper from './components/stepper'

import App from './components/app/app';
import PostsIndex from './components/postIndex/postIndex';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="post/new" component={Stepper}/>
        <Route path="post/:id" component={PostShow}/>
    </Route>
);