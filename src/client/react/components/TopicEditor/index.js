import * as React from 'react';
import * as RBS from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {observer} from 'mobx-react';
import {browserHistory} from 'react-router';

import {CluboEditor} from '../';

const editorComponent = props => {
    return (
        <CluboEditor
            onChange={props.input.onChange}
            value={props.input.value}
            id='topic-editor-modal'
            />
    )
}

@observer
export default class TopicEditorModal extends React.Component {
    close() {
        // const {dispatch} = this.props;
        // dispatch(close());
    }

    submit(values) {
        // const {dispatch} = this.props;
        // const unlisten = browserHistory.listen(function (location) {
        //     let query = {};
        //     query.page = location.query.page == undefined ? 1 : location.query.page;
        //     query.recordsPerPage = location.query.recordsPerPage ? 20: location.recordsPerPage;
        //     dispatch(_add({...values, ...query}));
        // });
        // unlisten();
    }

    render() {

        require('./topic-editor.css');
        const {dispatch, show} = this.props;

        return (
            <div>
              
                    <RBS.Modal show={show} dialogClassName='topic-editor-modal'>
                        <RBS.Modal.Body>
                            <div>
                                
                            </div>
                        </RBS.Modal.Body>
                        <RBS.Modal.Footer>
                            <RBS.Button className="btn btn-info">Submit</RBS.Button>
                            <RBS.Button onClick={this.close.bind(this) }>Close</RBS.Button>
                        </RBS.Modal.Footer>
                    </RBS.Modal>
                
            </div>
        );
    }
}
