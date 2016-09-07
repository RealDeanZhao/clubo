import * as React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import {observer, inject} from 'mobx-react';

@inject('topicStore')
@observer
export default class PaginationContainer extends React.Component {
    handlePreviousClick() {
        let {current, go} = this.props.topicStore;
        if (current != 1) {
            go(current - 1);
            window.scrollTo(0, 0);
        }
    }

    handleNextClick() {
        let { current, count, recordsPerPage, go} = this.props.topicStore;
        console.log('current is' + current);
        let pages = Math.round(count / recordsPerPage);
        if (current != pages) {
            go(current + 1);
            window.scrollTo(0, 0);
        }
    }

    handleFirstClick() {
        let {go} = this.props.topicStore;
        go(1);
        window.scrollTo(0, 0);
    }

    handleLastClick() {
        let {count, recordsPerPage, go} = this.props.topicStore;
        let pages = Math.round(count / recordsPerPage);
        go(pages);
        window.scrollTo(0, 0);
    }

    render() {
        const {current, offset, count, recordsPerPage} = this.props.topicStore;

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
                <PaginationLinkContainer key={page} page={page}></PaginationLinkContainer>
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
                            <Link to='/' query={current == 1 ? { page: current, recordsPerPage } : { page: current - 1, recordsPerPage }}  onClick={this.handlePreviousClick.bind(this) } aria-label="Previous">
                                <span aria-hidden="true">&lt; </span>
                            </Link>
                        </li>
                        {pageList}
                        <li>
                            <Link to='/' query={current == pages ? { page: current, recordsPerPage } : { page: current + 1, recordsPerPage }}  onClick={this.handleNextClick.bind(this) } aria-label="Previous">
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

@inject('topicStore')
@observer
class PaginationLinkContainer extends React.Component {
    handleClick() {
        const {page} = this.props;
        let {go} = this.props.topicStore;
        go(page);
        window.scrollTo(0, 0);
    }

    render() {
        const {page} = this.props;
        const {recordsPerPage, current} = this.props.topicStore;
        let active = '';
        if (page == current) {
            active = 'active';
        }
        return (
            <li className={active}><Link to="/" query={{ page, recordsPerPage }} onClick={this.handleClick.bind(this) }>{page}</Link></li>
        )
    }
}