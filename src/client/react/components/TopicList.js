import * as React from 'react';
import {TopicRowProps, TopicRow} from './TopicRow';
import {connect} from 'react-redux';
import {fetchTopics} from '../actions/TopicAction';
import {Router, Route, Link, browserHistory} from 'react-router';

class TopicList extends React.Component {

    componentWillMount() {
        const {topicList, dispatch} = this.props;
        dispatch(fetchTopics());
    };

    render() {
        const {topicList, dispatch} = this.props;
        let key = 0;
        let list = topicList.map(function (topic) {
            return (
                <TopicRow key ={key++} {...topic}></TopicRow>
            );
        }, this);
        return (
            <div>
                <ul className="list-group">

                    <li className="list-group-item"><Link to='/auth/createLocalUser'>{'All'}{'  '}</Link><a>{'Good'}{'  '}</a><a>{'Share'}{'  '}</a></li>
                    {list}

                    <ul className="pagination">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo; </span>
                            </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo; </span>
                            </a>
                        </li>
                    </ul>
                </ul>
                {this.props.children}
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    topicList: state.topicList
});


export default connect(mapStateToProps)(TopicList);
