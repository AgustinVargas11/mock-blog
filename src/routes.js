import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostNew from './components/postNew';
import PostShow from './components/postShow';

import App from './components/app';
import PostsIndex from './components/postIndex';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="post/new" component={PostNew}/>
        <Route path="post/:id" component={PostShow}/>
    </Route>
);