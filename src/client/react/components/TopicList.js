import * as React from 'react';
import * as C from './';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';

import {_jump} from '../modules/topicListPagination';


class TopicList extends React.Component {

    componentWillMount() {
        const {dispatch, query} = this.props;
        dispatch(_jump(query));
    };

    render() {
        const {list} = this.props;

        let key = 0;

        let topicList = list.map(function (topic) {
            return (
                <C.TopicRow key ={key++} {...topic}></C.TopicRow>
            );
        }, this);

        return (
            <div>
                <ul className="list-group">
                    {topicList}
                </ul>
                <C.TopicListPagination></C.TopicListPagination>
                {this.props.children}
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    list: state.topics.list,
    query: ownProps.location.query
});


export default connect(mapStateToProps)(TopicList);
