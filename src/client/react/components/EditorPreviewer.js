import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import '../../css/topic-editor.css';

export default class EditorPreviewer extends React.Component {
    render() {
        const {source} = this.props;

        return (
            <div>
                <ReactMarkdown source={source} className='topic-editor-previewer'></ReactMarkdown>
            </div>
        );
    }
}

