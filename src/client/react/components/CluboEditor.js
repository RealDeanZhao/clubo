import * as React from 'react';
import * as RBS from 'react-bootstrap';
import * as C from '../components';
import { Editor, EditorState, ContentState } from 'draft-js';

export default class CluboEditor extends React.Component {
    constructor(props) {
        super(props);
        let contentState = null;
        if (props.value) {
            contentState = ContentState.createFromText(props.value);
        } else {
            contentState = ContentState.createFromText('');
        }

        this.state = { editorState: EditorState.createWithContent(contentState), previewerState: contentState.getPlainText() };
    }

    onChange(editorState) {
        let previewerState = editorState.getCurrentContent().getPlainText();
        this.setState({ editorState, previewerState })
        return this.props.onChange(previewerState);
    };

    render() {
        require('../../css/clubo-editor.css');
        return (
            <div>
                <RBS.Tabs id='clubo-editor-modal'>
                    <RBS.Tab eventKey={1} title='Edit'>
                        <div className='clubo-editor'>
                            <Editor
                                editorState={this.state.editorState}
                                value={this.state.previewerState}
                                onChange={this.onChange.bind(this) }
                                >
                            </Editor>
                        </div>
                    </RBS.Tab>
                    <RBS.Tab eventKey={2} title='Preview'>
                        <div>
                            <C.CluboEditorPreviewer source={this.state.previewerState}></C.CluboEditorPreviewer>
                        </div>
                    </RBS.Tab>
                </RBS.Tabs>
            </div>
        );
    }
}

