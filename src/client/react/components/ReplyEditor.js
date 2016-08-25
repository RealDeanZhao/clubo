import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import {Field, reduxForm} from 'redux-form';

import {_add} from '../modules/replies';
import * as C from '../components';

class ReplyEditor extends React.Component {

    submit(values) {
        const {dispatch} = this.props;
        dispatch(_add(values));
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
