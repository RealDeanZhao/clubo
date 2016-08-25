import * as React from 'react';
import * as C from './';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';

import {_load} from '../modules/topics';

class TopicList extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(_load());
    };

    render() {
        const {list, dispatch} = this.props;
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
                {this.props.children}
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    list: state.topics.list
});


export default connect(mapStateToProps)(TopicList);
