import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';

export default class EditorPreviewer extends React.Component {
    render() {
        require('../../css/clubo-editor.css');
        const {source} = this.props;

        return (
            <div>
                <ReactMarkdown source={source} className='clubo-editor-previewer'></ReactMarkdown>
            </div>
        );
    }
}

