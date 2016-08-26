import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';

import {TopicListPaginationLink} from '../components';
import {_jump} from '../modules/topicListPagination';

class TopicListPagination extends React.Component {
    handlePreviousClick() {
        if (current != 1) {
            const {dispatch, current, recordsPerPage} = this.props;
            dispatch(_jump({ page: current - 1, recordsPerPage }));
        }
    }
    handleNextClick() {
        const {dispatch, current, count, recordsPerPage} = this.props;
        let pages = Math.round(count / recordsPerPage);
        if (current != pages) {
            dispatch(_jump({ page: current + 1, recordsPerPage }));
        }
    }
    handleFirstClick() {
        const {dispatch, current, recordsPerPage} = this.props;
        dispatch(_jump({ page: 1, recordsPerPage }));
    }
    handleLastClick() {
        const {dispatch, count, recordsPerPage} = this.props;
        let pages = Math.round(count / recordsPerPage);
        dispatch(_jump({ page: pages, recordsPerPage }));
    }

    render() {
        const {current, offset, count, recordsPerPage} = this.props;

        let pageArray = [];
        let left = current;
        let pages = Math.round(count / recordsPerPage);
        if (current < offset + 1) {
            for (let i = 1; i <= 2 * offset + 1; i++) {
                if (i <= pages) {
                    pageArray.push(i);
                }
            }
        } else {
            for (let i = current - offset; i <= current + offset; i++) {
                if (i <= 1) {
                    pageArray.push(1);
                } else {
                    if (i <= pages) {
                        pageArray.push(i);
                    }
                }
            }
        }

        let pageList = pageArray.map(function (page) {
            return (
                <TopicListPaginationLink key={page} page={page}></TopicListPaginationLink>
            );
        }, this);

        return (
            <div>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li>
                            <Link to='/' query={{ page: 1, recordsPerPage }} onClick={this.handleFirstClick.bind(this) } aria-label="Previous">
                                <span aria-hidden="true">&laquo; </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' query={{ page: current - 1, recordsPerPage }}  onClick={this.handlePreviousClick.bind(this) } aria-label="Previous">
                                <span aria-hidden="true">&lt; </span>
                            </Link>
                        </li>
                        {pageList}
                        <li>
                            <Link to='/' query={{ page: current + 1, recordsPerPage }}  onClick={this.handleNextClick.bind(this) } aria-label="Previous">
                                <span aria-hidden="true">&gt; </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' query={{ page: pages, recordsPerPage }}  onClick={this.handleLastClick.bind(this) } aria-label="Next">
                                <span aria-hidden="true">&raquo; </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    offset: state.topicListPagination.offset,
    current: state.topicListPagination.current,
    count: state.topics.count,
    recordsPerPage: state.topics.recordsPerPage
});


export default connect(mapStateToProps)(TopicListPagination);

