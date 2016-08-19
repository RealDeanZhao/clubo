import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import '../../css/clubo-editor-modal.css';

class TopicEditorPreviewer extends React.Component {
    render() {
        const {topicDraft, topicEditorForm} = this.props;
        let topicSource = '';

        if (topicEditorForm && topicEditorForm.values) {
            topicSource = topicEditorForm.values.content;
        }

        return (
            <div>
                <ReactMarkdown source={topicSource} className='clubo-editor-previewer'></ReactMarkdown>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    topicEditorForm: state.form.topicEditorForm
});
export default connect(mapStateToProps)(TopicEditorPreviewer);
