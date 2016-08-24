import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import {createReply} from '../actions';
import * as C from '../components';

const RF = require('redux-form');
const Field = RF.Field;
const reduxForm = RF.reduxForm;

class ReplyEditor extends React.Component {

    submit(values) {
        const {dispatch} = this.props;
        dispatch(createReply(values));
    }

    render() {
        require('../../css/reply-editor.css');
        const {dispatch, handleSubmit} = this.props;

        return (
            <div className='clubo-reply-editor'  >
                <form>
                    <Field name="content" component={props =>
                        <C.CluboEditor onChange={props.input.onChange}
                            value={props.input.value}
                            id='reply-editor-id-1'
                            name='reply-editor-name-1'></C.CluboEditor>
                    }/>

                    <button onClick={handleSubmit(this.submit.bind(this)) } className="btn btn-info">Submit</button>
                </form>
            </div>
        );
    }
}

ReplyEditor = reduxForm({
    form: 'replyEditorForm'
})(ReplyEditor);

export default ReplyEditor;
