import * as React from 'react';
import ReactMarkdown from 'react-markdown';

export default class EditorPreviewer extends React.Component {
    render() {
        require('./styles.css');
        const {source} = this.props;

        return (
            <div>
                <ReactMarkdown source={source} className='clubo-editor-previewer'></ReactMarkdown>
            </div>
        );
    }
}

