import * as React from 'react';
import * as RBS from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {observer, inject} from 'mobx-react';
import {browserHistory} from 'react-router';

import {CluboEditor} from '../';
import form from './form';
import './styles.css';

@inject('replyEditorStore')
@inject('replyStore')
@observer
export default class ReplyEditorModal extends React.Component {
    close() {
        const {closeModal} = this.props.replyEditorStore;
        closeModal();
    }

    handleSubmit() {
        let values = form.values();
        const {createReply, fetchReplies, topicId} = this.props.replyStore;
        const {closeModal, replyId} = this.props.replyEditorStore;
        values.replyId = replyId;
        const unlisten = browserHistory.listen(function (location) {
            createReply(values);
            form.reset();
            closeModal();

            const {query} = location;
            fetchReplies(topicId, { current: query.page });
        });
        unlisten();
    }

    render() {
        const {show} = this.props.replyEditorStore;

        return (
            <div>
                <form>
                    <RBS.Modal show={show} dialogClassName='reply-editor-modal'>
                        <RBS.Modal.Body>
                            <div>
                                <CluboEditor id='reply-editor-modal' name={form.$('content').name} content={form.$('content').value} onChange={form.$('content').sync }/>
                            </div>
                        </RBS.Modal.Body>
                        <RBS.Modal.Footer>
                            <RBS.Button className="btn btn-info" onClick={this.handleSubmit.bind(this) }>Submit</RBS.Button>
                            <RBS.Button onClick={this.close.bind(this) }>Close</RBS.Button>
                        </RBS.Modal.Footer>
                    </RBS.Modal>
                </form>
            </div>
        );
    }
}

