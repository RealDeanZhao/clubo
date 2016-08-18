import * as React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import {syncTopicDraft} from '../actions/TopicAction';

class MarkdownPreviewer extends React.Component {

    render() {
        const {topicDraft} = this.props;
        return (
            <ReactMarkdown source= {topicDraft} ></ReactMarkdown>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    topicDraft: state.topicDraft
});

export default connect(mapStateToProps)(MarkdownPreviewer);



