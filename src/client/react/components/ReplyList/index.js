import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {Router, Route, Link, browserHistory} from 'react-router';
import ReactMarkdown from 'react-markdown';

import PaginationContainer from './Pagination';

@inject('replyStore')
@observer
export default class ReplyList extends React.Component {

    componentWillMount() {
        const {topicId, replyStore} = this.props;

        replyStore.fetchReplies(topicId);
    };

    render() {
        require('./reply-list.css');
        const {topicId} = this.props;
        const {replies} = this.props.replyStore;

        let key = 0;

        return (
            <ReplyListView replies={replies} topicId={topicId} />
        );
    };
}

class ReplyListView extends React.Component {
    render() {
        const {replies, topicId} = this.props;
        let view = replies.map(function (reply) {
            return (
                <ReplyEntryView key ={reply.id} {...reply} />
            );
        }, this);
        return (
            <div>
                <div className='reply-list'>
                    <div className='reply-list-header'>
                        Replies
                    </div>
                    {view}
                </div>
                <PaginationContainer topicId={topicId} />
            </div>
        )
    }
}
class ReplyEntryView extends React.Component {
    render() {
        require('./reply-detail.css');
        const {content, topicId, id} = this.props;

        return (
            <div className='reply-detail'>
                <div>
                    <ReactMarkdown source={content}></ReactMarkdown>
                </div>
            </div>
        )
    }
}
