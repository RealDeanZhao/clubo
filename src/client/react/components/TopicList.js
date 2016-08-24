import * as React from 'react';
import * as C from './';
import {connect} from 'react-redux';
import {fetchTopics} from '../actions/TopicAction';
import {Router, Route, Link, browserHistory} from 'react-router';

class TopicList extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchTopics());
    };

    render() {
        const {topicList, dispatch} = this.props;
        let key = 0;
        let list = topicList.map(function (topic) {
            return (
                <C.TopicRow key ={key++} {...topic}></C.TopicRow>
            );
        }, this);
        
        return (
            <div>
                <ul className="list-group">

                    {list}

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
