import * as React from 'react';
import * as C from '../components';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';
import {Field, reduxForm} from 'redux-form';

import {_get} from '../modules/topics';

class TopicDetail extends React.Component {
    componentWillMount() {
        const {dispatch, id} = this.props;
        dispatch(_get(id));
    };

    render() {
        require('../../css/topic-detail.css');
        const {dispatch, detail, handleSubmit, id} = this.props;

        let content = '';
        let title = '';
        if (detail && detail.content) {
            content = detail.content;
            title = detail.title;
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
    detail: state.topics.detail,
    id: ownProps.params.id
});


export default connect(mapStateToProps)(TopicDetail);
