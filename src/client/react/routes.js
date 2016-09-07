import * as React from 'react';
import * as C from './components';

import { Route, IndexRoute } from 'react-router'

export default (
    <Route path="/" component = {C.App}>
        <IndexRoute component ={ C.TopicListContainer } >
        </IndexRoute>
        <Route path="topics/detail/:id" component ={C.TopicDetailContainer} ></Route>
    </Route>
)