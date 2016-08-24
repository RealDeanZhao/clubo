import * as React from 'react';
import * as RBS from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import {closeCluboEditorModal, createTopic} from '../actions';
import * as C from '../components';

const RF = require('redux-form');
const Field = RF.Field;
const reduxForm = RF.reduxForm;

const editorComponent = props => {
    return (
        <C.CluboEditor
            onChange={props.input.onChange}
            value={props.input.value}
            >
        </C.CluboEditor>
    )
}

class EditorForm extends React.Component {
    close() {
        const {dispatch} = this.props;
        dispatch(closeCluboEditorModal());
    }

    submit() {
        const {dispatch} = this.props;
        dispatch(createTopic(values));
    }

    render() {
        require('../../css/clubo-editor.css');
        const {dispatch, showCluboEditorModal, handleSubmit} = this.props;

        return (
            <div>
                <form >
                    <RBS.Modal show={showCluboEditorModal} dialogClassName='clubo-editor-modal'>
                        <RBS.Modal.Body>
                            <div>
                                <Field component='input' className="form-control" placeholder="Title" name='title'/>
                            </div>
                            <Field name="content" component={editorComponent}/>
                        </RBS.Modal.Body>
                        <RBS.Modal.Footer>
                            <RBS.Button onClick={handleSubmit(this.submit.bind(this)) } className="btn btn-info">Submit</RBS.Button>
                            <RBS.Button onClick={this.close.bind(this) }>Close</RBS.Button>
                        </RBS.Modal.Footer>
                    </RBS.Modal>
                </form>
            </div>
        );
    }
}


EditorForm = reduxForm({
    form: 'editorForm'
})(EditorForm);

const mapStateToProps = (state, ownProps) => ({
    showCluboEditorModal: state.showCluboEditorModal
});

export default connect(mapStateToProps)(EditorForm);
