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
            <div>
                <TopicListView topics={topicStore.topics} />
                <PaginationContainer/>
            </div>
        );
    };
}

class TopicListView extends React.Component {
    render() {
        require('./styles.css');

        const {topics} = this.props;
        const view = topics.map(function (topic) {
            return (
                <TopicEntryView key ={topic.id} {...topic}></TopicEntryView>
            );
        }, this);
        return (
            <div className='topic-list-container'>
                <div>List Header</div>
                {view}
            </div>
        );
    };

}

class TopicEntryView extends React.Component {
    render() {
        require('./styles.css');

        return (
            <div className='topic-list-item'>
                <div className='topic-list-item-header'>

                </div>

                <h4 className='topic-list-item-body'>
                    <Link className='topic_title' to={'/topics/detail/' + this.props.id}>
                        {this.props.title}
                    </Link>
                </h4>
                <div className='topic-list-item-footer'>
                    <span>
                        Replies: {this.props.replyCount}
                    </span>
                    <span title='Views'>
                        Views: {this.props.visitCount}
                    </span>
                </div>
            </div >
        )
    };
}
