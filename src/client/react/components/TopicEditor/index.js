import * as React from 'react';
import * as RBS from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {observer, inject} from 'mobx-react';
import {browserHistory} from 'react-router';

import {CluboEditor} from '../';
import form from './form.js';
import './styles.css';

@inject('topicEditorStore')
@inject('topicStore')
@observer
export default class TopicEditorModal extends React.Component {
    close() {
        const {closeModal} = this.props.topicEditorStore;
        closeModal();
    }

    handleSubmit() {
        const values = form.values();
        const {createTopic, fetchTopics} = this.props.topicStore;
        const {closeModal} = this.props.topicEditorStore;
        const unlisten = browserHistory.listen(function (location) {
            createTopic(values);
            form.reset();
            closeModal();
            fetchTopics();
        });
        unlisten();
    }

    render() {
        const {show} = this.props.topicEditorStore;

        return (
            <div>
                <form>
                    <RBS.Modal show={show} dialogClassName='topic-editor-modal'>
                        <RBS.Modal.Body>
                            <div>
                                <input className="form-control" name={form.$('title').name} value={form.$('title').value} onChange={form.$('title').sync} />
                                <CluboEditor id='topic-editor-modal' name={form.$('content').name} content={form.$('content').value} onChange={form.$('content').sync }/>
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
