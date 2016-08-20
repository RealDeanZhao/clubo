import * as React from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import '../../css/reply-detail.css';

export default class ReplyRow extends React.Component {
    render() {
        const {content} = this.props;
        return (
            <div className='reply-detail'>
                <ReactMarkdown source={content}></ReactMarkdown>
            </div>
        )
    };
}