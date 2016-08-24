import * as React from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';

export default class ReplyRow extends React.Component {
    render() {
        require('../../css/reply-detail.css');
        const {content} = this.props;
        return (
            <div className='reply-detail'>
                <ReactMarkdown source={content}></ReactMarkdown>
            </div>
        )
    };
}