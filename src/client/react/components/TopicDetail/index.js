import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';

import {ReplyListContainer} from '../';
import {ReplyButton} from '../';
import './styles.css';

@inject('topicStore')
@observer
export default class TopicDetailContainer extends React.Component {
    componentDidMount() {
        const {params, topicStore} = this.props;
        topicStore.fetchTopic(params.id);
    }
    render() {
        const {topic} = this.props.topicStore;
        const {params} = this.props;

        return (
            <div>
                <TopicDetail topic={topic} />
                <ReplyListContainer topicId={params.id} />
            </div>
        )
    };
}

class TopicDetail extends React.Component {
    render() {
        const { topic } = this.props;

        return (
            <div className='topic-detail'>
                <h2 className='topic-detail-title'>{topic.title}</h2>
                <ReactMarkdown source={topic.content ? topic.content : ''}></ReactMarkdown>
                <ReplyButton replyId={''}/>
            </div>
        )
    };
}

