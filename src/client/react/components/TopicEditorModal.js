import * as React from 'react';
import * as RBS from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {browserHistory} from 'react-router';

import {close} from '../modules/topicEditorModal';
import {_add} from '../modules/topics';
import * as C from '../components';

const editorComponent = props => {
    return (
        <C.CluboEditor
            onChange={props.input.onChange}
            value={props.input.value}
            id='topic-editor-modal'
            >
        </C.CluboEditor>
    )
}

class TopicEditorModal extends React.Component {
    close() {
        const {dispatch} = this.props;
        dispatch(close());
    }

    submit(values) {
        const {dispatch} = this.props;
        const unlisten = browserHistory.listen(function (location) {
            let query = {};
            query.page = location.query.page == undefined ? 1 : location.query.page;
            query.recordsPerPage = location.query.recordsPerPage ? 20: location.recordsPerPage;
            dispatch(_add({...values, ...query}));
        });
        unlisten();
    }

    render() {

        require('../../css/clubo-editor.css');
        const {dispatch, show, handleSubmit} = this.props;

        return (
            <div>
                <form >
                    <RBS.Modal show={show} dialogClassName='clubo-editor-modal'>
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


TopicEditorModal = reduxForm({
    form: 'topicEditorForm'
})(TopicEditorModal);

const mapStateToProps = (state, ownProps) => ({
    show: state.topicEditorModal
});

export default connect(mapStateToProps)(TopicEditorModal);
