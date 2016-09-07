import * as React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import {observer, inject} from 'mobx-react';

@inject('replyStore')
@observer
export default class PaginationContainer extends React.Component {
    handlePreviousClick() {
        const {topicId} = this.props;
        let {current, go} = this.props.replyStore;
        if (current != 1) {
            go(topicId, current - 1);
            window.scrollTo(0, 0);
        }
    }

    handleNextClick() {
        const {topicId} = this.props;
        let { current, count, recordsPerPage, go} = this.props.replyStore;
        console.log('current is' + current);
        let pages = Math.round(count / recordsPerPage);
        if (current != pages) {
            go(topicId, current + 1);
            window.scrollTo(0, 0);
        }
    }

    handleFirstClick() {
        const {topicId} = this.props;
        let {go} = this.props.replyStore;
        go(topicId, 1);
        window.scrollTo(0, 0);
    }

    handleLastClick() {
        const {topicId} = this.props;
        let {count, recordsPerPage, go} = this.props.replyStore;
        let pages = Math.round(count / recordsPerPage);
        go(topicId, pages);
        window.scrollTo(0, 0);
    }

    render() {
        const {topicId} = this.props;
        const {current, offset, count, recordsPerPage} = this.props.replyStore;

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
                <PaginationLinkContainer key={page} page={page} topicId={topicId}></PaginationLinkContainer>
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
                            <Link to={'/topics/detail/' + topicId} query={current == 1 ? { page: current, recordsPerPage } : { page: current - 1, recordsPerPage }}  onClick={this.handlePreviousClick.bind(this) } aria-label="Previous">
                                <span aria-hidden="true">&lt; </span>
                            </Link>
                        </li>
                        {pageList}
                        <li>
                            <Link to={'/topics/detail/' + topicId} query={current == pages ? { page: current, recordsPerPage } : { page: current + 1, recordsPerPage }}  onClick={this.handleNextClick.bind(this) } aria-label="Previous">
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

@inject('replyStore')
@observer
class PaginationLinkContainer extends React.Component {
    handleClick() {
        const {page, topicId} = this.props;
        let {go} = this.props.replyStore;
        go(topicId, page);
        window.scrollTo(0, 0);
    }

    render() {
        const {page, topicId} = this.props;
        const {recordsPerPage, current} = this.props.replyStore;
        let active = '';
        if (page == current) {
            active = 'active';
        }
        return (
            <li className={active}><Link to={'/topics/detail/' + topicId} query={{ page, recordsPerPage }} onClick={this.handleClick.bind(this) }>{page}</Link></li>
        )
    }
}