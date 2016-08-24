import * as React from 'react';
import * as C from './';
import {connect} from 'react-redux';
import {fetchReplies} from '../actions/ReplyAction';
import {Router, Route, Link, browserHistory} from 'react-router';

class ReplyList extends React.Component {

    componentWillMount() {
        const {dispatch, topicId} = this.props;
        dispatch(fetchReplies(topicId));
    };

    render() {
        require('../../css/reply-list.css');
        const {replyList, dispatch} = this.props;
        let key = 0;
        let list = replyList.map(function (reply) {
            return (
                <C.ReplyRow key ={key++} {...reply}></C.ReplyRow>
            );
        }, this);

        return (
            <div className='reply-list'>
                <div className='reply-list-header'>
                    Replies
                </div>
                {list}
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    replyList: state.replyList
});


export default connect(mapStateToProps)(ReplyList);
