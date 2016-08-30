import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';

import {_jump} from '../modules/replyListPagination';

class ReplyListPaginationLink extends React.Component {

    handleClick() {
        const {dispatch, page, recordsPerPage, topicId} = this.props;
        dispatch(_jump({ page, recordsPerPage, topicId }));
    }

    render() {
        const {page, recordsPerPage, current, topicId} = this.props;
        let active = '';
        if (page == current) {
            active = 'active';
        }
        return (
            <li className={active}><Link to={'/topics/detail/' + topicId} query={{ page, recordsPerPage }} onClick={this.handleClick.bind(this) }>{page}</Link></li>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    recordsPerPage: state.replies.recordsPerPage,
    current: state.replyListPagination.current
});

export default connect(mapStateToProps)(ReplyListPaginationLink);

