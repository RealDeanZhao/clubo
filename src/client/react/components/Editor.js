import * as React from 'react';
import * as RBS from 'react-bootstrap';
//import brace from '../../../wrappers/brace.wrapper';
//import AceEditor from 'react-ace';
import '../../css/topic-editor.css';
import * as C from '../components';
import RichTextEditor from 'react-rte';
import { Editor, EditorState } from 'draft-js';



export default class CluboEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty(), previewerState: '' };


    }

    onChange(editorState) {
        let previewerState = editorState.getCurrentContent().getPlainText();
        this.setState({ editorState, previewerState })
        return this.props.onChange(previewerState);
    };

    render() {
        const {editorState, previewerState, onChange, id, value, editorValue, name} = this.state;

        return (
            <div>
                <RBS.Tabs id={id}>
                    <RBS.Tab eventKey={1} title='Edit'>
                        <div>
                            <Editor editorState={editorState} value={previewerState} onChange={this.onChange.bind(this)}
                                >
                            </Editor>
                        </div>
                    </RBS.Tab>
                    <RBS.Tab eventKey={2} title='Preview'>
                        <div>
                            <C.EditorPreviewer source={previewerState}></C.EditorPreviewer>
                        </div>
                    </RBS.Tab>
                </RBS.Tabs>
            </div>
        );
    }
}

