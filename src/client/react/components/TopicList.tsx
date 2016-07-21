import * as React from 'react';
import {TopicRowProps, TopicRow} from './TopicRow';
import {connect} from 'react-redux';
import {fetchTopics} from '../actions/TopicAction';

export interface TopicListProps extends React.Props<any> {
    topicList: [TopicRowProps],
    dispatch: any
}

class TopicList extends React.Component<TopicListProps, [{}]>{

    componentWillMount = function (): any {
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
            <ul className="list-group">
                <li className="list-group-item"><a>{'All'}{'  '}</a><a>{'Good'}{'  '}</a><a>{'Share'}{'  '}</a></li>
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
        );
    }
}

const mapStateToProps = (state: any, dispatch: any): TopicListProps => ({
    topicList: state.topicList,
    dispatch: dispatch
});

export const ConnectedTopicList = connect(mapStateToProps)(TopicList);
