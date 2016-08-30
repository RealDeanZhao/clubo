import * as React from 'react';
import * as C from './';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';

import {_load} from '../modules/replies';

class ReplyList extends React.Component {

    componentWillMount() {
        const {dispatch, topicId} = this.props;
        dispatch(_load({ topicId }));
    };

    render() {
        require('../../css/reply-list.css');
        const {list, dispatch, topicId} = this.props;

        let key = 0;
        let replyList = list.map(function (reply) {
            return (
                <C.ReplyRow key ={key++} {...reply}></C.ReplyRow>
            );
        }, this);

        return (
            <div>
                <div className='reply-list'>
                    <div className='reply-list-header'>
                        Replies
                    </div>
                    {replyList}
                </div>
                <C.ReplyListPagination topicId={topicId}></C.ReplyListPagination>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    list: state.replies.list
});


export default connect(mapStateToProps)(ReplyList);
