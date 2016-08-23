import * as React from 'react';
import * as C from '../components';
import {connect} from 'react-redux';
import {getTopic} from '../actions/TopicAction';
import ReactMarkdown from 'react-markdown';
import '../../css/topic-detail.css';

const RF = require('redux-form');
const Field = RF.Field;
const reduxForm = RF.reduxForm;

class TopicDetail extends React.Component {
    componentWillMount() {
        const {dispatch, id} = this.props;
        dispatch(getTopic(id));
    };

    render() {
        const {dispatch, topicDetail, handleSubmit, id} = this.props;

        let content = '';
        let title = '';
        if (topicDetail && topicDetail.content) {
            content = topicDetail.content;
            title = topicDetail.title;
        }

        return (
            <div>
                <div className='topic-detail'>
                    <h2 className='topic-detail-title'>{title}</h2>
                    <ReactMarkdown source={content}></ReactMarkdown>
                </div>
                <div>
                    <C.ReplyList topicId={id}></C.ReplyList>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => ({
    topicDetail: state.topicDetail,
    id: ownProps.params.id
});


export default connect(mapStateToProps)(TopicDetail);
