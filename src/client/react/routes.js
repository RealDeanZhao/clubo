import * as React from 'react';
import * as C from './components';

import { Route, IndexRoute } from 'react-router'

export default (
    <Route path="/" component = {C.App}>
        <IndexRoute component ={ C.TopicList } >
        </IndexRoute>
        <Route path="topics/create" component = {C.CluboEditorHeader}>
            <IndexRoute component = {C.CluboEditor}></IndexRoute>
            <Route path="preview" component = {C.MarkdownPreviewer}></Route>
        </Route>
        <Route path="topics/detail/:id" component ={C.TopicDetail} ></Route>
    </Route>
)