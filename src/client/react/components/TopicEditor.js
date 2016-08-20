import * as React from 'react';
import * as RBS from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import 'brace/mode/markdown';
import 'brace/theme/github';
import {connect} from 'react-redux';
import {closeTopicEditorModal, createTopic} from '../actions';
import '../../css/topic-editor.css';
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

    submit(dispatch) {
        return function (values) {
            //console.log(values);
            dispatch(createTopic(values));
        }
    }

    render() {
        const {dispatch, showTopicEditorModal, handleSubmit} = this.props;

        return (
            <div>
                <form >
                    <RBS.Modal show={showTopicEditorModal} dialogClassName='topic-editor'>
                        <RBS.Modal.Body>
                            <div>
                                <Field component='input' className="form-control" placeholder="Title" name='title'/>
                            </div>
                            <Field name="content" component={props =>
                                <C.Editor 
                                    onChange={props.input.onChange} 
                                    value={props.input.value} 
                                    id='clubo-topic-editor-id-1' 
                                    name='clubo-topic-editor-name-1'>
                                </C.Editor>
                            }/>
                        </RBS.Modal.Body>
                        <RBS.Modal.Footer>
                            <RBS.Button onClick={handleSubmit(this.submit(dispatch)) } className="btn btn-info">Submit</RBS.Button>
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
