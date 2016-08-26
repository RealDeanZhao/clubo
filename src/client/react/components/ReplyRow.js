import * as React from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';

import * as C from '../components';

export default class ReplyRow extends React.Component {

    render() {
        require('../../css/reply-detail.css');
        const {content, topicId, id} = this.props;

        return (
            <div className='reply-detail'>
                <div>
                    <ReactMarkdown source={content}></ReactMarkdown>
                </div>
                <C.ReplyButton topicId={topicId} id={id}></C.ReplyButton>
            </div>
        )
    };
}
