import * as React from 'react';
import * as C from './components';

import { Route, IndexRoute } from 'react-router'

export default (
    <Route path="/" component = {C.App}>
        <IndexRoute component ={ C.TopicList } >
        </IndexRoute>
        <Route path="topics/detail/:id" component ={C.TopicDetail} ></Route>
        <Route path="users" component = {C.UserCreate}></Route>
    </Route>
)