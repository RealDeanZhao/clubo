import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';

import {ReplyListPaginationLink} from '../components';
import {_jump} from '../modules/replyListPagination';

class ReplyListPagination extends React.Component {
    handlePreviousClick() {
        const {dispatch, current, recordsPerPage, topicId} = this.props;
        if (current != 1) {
            dispatch(_jump({ page: current - 1, recordsPerPage, topicId }));
        }
    }
    handleNextClick() {
        const {dispatch, current, count, recordsPerPage, topicId} = this.props;
        let pages = Math.round(count / recordsPerPage);
        if (current != pages) {
            dispatch(_jump({ page: current + 1, recordsPerPage, topicId }));
        }
    }
    handleFirstClick() {
        const {dispatch, current, recordsPerPage, topicId} = this.props;
        dispatch(_jump({ page: 1, recordsPerPage, topicId }));
    }
    handleLastClick() {
        const {dispatch, count, recordsPerPage, topicId} = this.props;
        let pages = Math.round(count / recordsPerPage);
        dispatch(_jump({ page: pages, recordsPerPage, topicId }));
    }

    render() {
        const {current, offset, count, recordsPerPage, topicId} = this.props;
        let pageArray = [];
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
                <ReplyListPaginationLink key={page} page={page} topicId={topicId}></ReplyListPaginationLink>
            );
        }, this);

        return (
            <div>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li>
                            <Link to={'/topics/detail/' + topicId} query={{ page: 1, recordsPerPage }} onClick={this.handleFirstClick.bind(this) } aria-label="Previous">
                                <span aria-hidden="true">&laquo; </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/topics/detail/' + topicId} query={{ page: current - 1, recordsPerPage }}  onClick={this.handlePreviousClick.bind(this) } aria-label="Previous">
                                <span aria-hidden="true">&lt; </span>
                            </Link>
                        </li>
                        {pageList}
                        <li>
                            <Link to={'/topics/detail/' + topicId} query={{ page: current + 1, recordsPerPage }}  onClick={this.handleNextClick.bind(this) } aria-label="Previous">
                                <span aria-hidden="true">&gt; </span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/topics/detail/' + topicId} query={{ page: pages, recordsPerPage }}  onClick={this.handleLastClick.bind(this) } aria-label="Next">
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
    offset: state.replyListPagination.offset,
    current: state.replyListPagination.current,
    count: state.replies.count,
    recordsPerPage: state.replies.recordsPerPage
});


export default connect(mapStateToProps)(ReplyListPagination);

