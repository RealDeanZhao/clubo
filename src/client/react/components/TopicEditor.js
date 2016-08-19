import * as React from 'react';
import * as RBS from 'react-bootstrap';
import brace from 'brace';
import AceEditor from 'react-ace';
import ReactMarkdown from 'react-markdown';
import 'brace/mode/markdown';
import 'brace/theme/github';
import {connect} from 'react-redux';
import {closeTopicEditorModal} from '../actions';
import '../../css/clubo-editor-modal.css';
import * as C from '../components';

const RF = require('redux-form');
const Field = RF.Field;
const reduxForm = RF.reduxForm;

class TopicEditor extends React.Component {
    close(dispatch) {
        return function () {
            dispatch(closeTopicEditorModal());
        }
    }

    handleDraftChange(input, dispatch) {
        return input.onChange;
    }
    render() {
        const {dispatch, showTopicEditorModal} = this.props;

        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <RBS.Modal show={showTopicEditorModal} dialogClassName='clubo-editor-modal'>
                        <RBS.Modal.Body>
                            <div>
                                <Field component='input' className="form-control" placeholder="Title" name='title'/>
                            </div>

                            <RBS.Tabs id="clubo-editor">
                                <RBS.Tab eventKey={1} title='Edit'>
                                    <div>
                                        <Field name="content" component={props =>
                                            <AceEditor onChange = {props.input.onChange}
                                                onBlur = {props.input.onBlur}
                                                onFocus = {props.input.onFocus}
                                                mode='markdown'
                                                theme='github'
                                                name='haha-div'
                                                width='100%'
                                                value={props.input.value}
                                                editorProps={{ $blockScrolling: true }}
                                                fontSize={15}>
                                            </AceEditor>
                                        }/>
                                    </div>
                                </RBS.Tab>
                                <RBS.Tab eventKey={2} title='Preview'>
                                    <div>
                                        <C.TopicEditorPreviewer></C.TopicEditorPreviewer>
                                    </div>
                                </RBS.Tab>
                            </RBS.Tabs>
                        </RBS.Modal.Body>
                        <RBS.Modal.Footer>
                            <RBS.Button onClick={this.close(dispatch) }>Close</RBS.Button>
                        </RBS.Modal.Footer>
                    </RBS.Modal>
                </form>
            </div>
        );
    }
}


TopicEditor = reduxForm({
    form: 'topicEditorForm'
})(TopicEditor);

const mapStateToProps = (state, ownProps) => ({
    showTopicEditorModal: state.showTopicEditorModal
});

export default connect(mapStateToProps)(TopicEditor);
