import * as React from 'react';
import {TopicRow}from '../';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';

import PaginationContainer from './Pagination';

@inject('topicStore')
@observer
export default class TopicListContainer extends React.Component {
    componentDidMount() {
        const {fetchTopics} = this.props.topicStore;
        const {page} = this.props.location.query
        fetchTopics({ current: page });
    }

    render() {
        const {topicStore} = this.props;

        return (
            <TopicListView topics={topicStore.topics} />
        );
    };
}

class TopicListView extends React.Component {
    render() {
        const {topics} = this.props;
        const view = topics.map(function (topic) {
            return (
                <TopicEntryView key ={topic.id} {...topic}></TopicEntryView>
            );
        }, this);
        return (
            <ul>
                {view}
                <PaginationContainer/>
            </ul>
        );
    };

}

class TopicEntryView extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <div>
                    <span className="pull-right">
                        <span title="Replies">
                            {this.props.replyCount}
                        </span>
                        <span>/</span>
                        <span title='Views'>
                            {this.props.visitCount}
                        </span>
                    </span>
                    <Link className='topic_title' to={'/topics/detail/' + this.props.id}>
                        {this.props.title}
                    </Link>
                </div>
            </li >
        )
    };
}
