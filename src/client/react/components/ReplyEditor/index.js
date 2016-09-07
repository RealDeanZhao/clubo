import * as React from 'react';
import * as RBS from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {observer} from 'mobx-react';
import {Field, reduxForm} from 'redux-form';
import {browserHistory} from 'react-router';

import {CluboEditor} from '../';

const editorComponent = props => {
    return (
        <CluboEditor
            onChange={props.input.onChange}
            value={props.input.value}
            id='reply-editor-modal'
            >
        </CluboEditor>
    )
}

@observer
export default class ReplyEditorModal extends React.Component {
    close() {
        // const {dispatch} = this.props;
        // dispatch(close());
    }

    submit(values) {
        // const {dispatch, topicId, id} = this.props;
        // const unlisten = browserHistory.listen(function(location){
        //     let query = {};
        //     query.page = location.query.page == undefined ? 1 : location.query.page;
        //     query.recordsPerPage = location.query.recordsPerPage ? 20: location.recordsPerPage;
        //     const reply = {
        //         ...values,
        //         ...query,
        //         topicId,
        //         replyId: id
        //     };
        //     dispatch(_add(reply));
        // });
        // unlisten();
    }

    render() {
        require('./reply-editor.css');
        const {dispatch, show, handleSubmit} = this.props;

        return (
            <div>
                <form >
                    <RBS.Modal show={show} dialogClassName='reply-editor-modal'>
                        <RBS.Modal.Body>
                            <div>

                            </div>
                            <Field name="content" component={editorComponent}/>
                        </RBS.Modal.Body>
                        <RBS.Modal.Footer>
                            <RBS.Button className="btn btn-info">Submit</RBS.Button>
                            <RBS.Button onClick={this.close.bind(this) }>Close</RBS.Button>
                        </RBS.Modal.Footer>
                    </RBS.Modal>
                </form>
            </div>
        );
    }
}

