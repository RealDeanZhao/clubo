import * as React from 'react';
import {TopicRowProps, TopicRow} from './TopicRow';
import {connect} from 'react-redux';
import {getTopic} from '../actions/TopicAction';
import ReactMarkdown from 'react-markdown';

class TopicDetail extends React.Component {
    componentWillMount() {
        const {dispatch, id} = this.props;
        dispatch(getTopic(id));
    };

    render() {
        const {topicDetail} = this.props;
        return (
            <div>
                <ReactMarkdown source={topicDetail.content}></ReactMarkdown>
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => ({
    topicDetail: state.topicDetail,
    id: ownProps.params.id
});


export default connect(mapStateToProps)(TopicDetail);
