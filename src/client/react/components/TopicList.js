import * as React from 'react';
import * as C from './';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';
import Loader from 'react-loader';
import {_jump} from '../modules/topicListPagination';


class TopicList extends React.Component {

    componentWillMount() {
        const {dispatch, query, token} = this.props;
        dispatch(_jump({...query, token}));
    };

    render() {
        const {list, done} = this.props;

        let key = 0;

        let topicList = list.map(function (topic) {
            return (
                <C.TopicRow key ={key++} {...topic}></C.TopicRow>
            );
        }, this);

        return (
            <div>
                <Loader loaded={done}>
                    <ul className="list-group">
                        {topicList}
                    </ul>
                    <C.TopicListPagination></C.TopicListPagination>
                    {this.props.children}
                </Loader>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    list: state.topics.list,
    query: ownProps.location.query,
    done: state.topics.done,
    token: state.auth.token
});


export default connect(mapStateToProps)(TopicList);
