import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';

import {_jump} from '../modules/topicListPagination';

class TopicListPaginationLink extends React.Component {

    handleClick() {
        const {dispatch, page, recordsPerPage} = this.props;
        dispatch(_jump({page, recordsPerPage}));
    }

    render() {
        const {page, recordsPerPage, current} = this.props;
        let active = '';
        if (page == current) {
            active = 'active';
        }
        return (
            <li className={active}><Link to="/" query={{ page, recordsPerPage }} onClick={this.handleClick.bind(this) }>{page}</Link></li>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    recordsPerPage: state.topics.recordsPerPage,
    current: state.topicListPagination.current
});


export default connect(mapStateToProps)(TopicListPaginationLink);

