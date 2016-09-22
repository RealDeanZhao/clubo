import * as React from 'react';
import * as RBS from 'react-bootstrap';
import { Editor, EditorState, ContentState } from 'draft-js';

import CluboEditorPreviewer from './Previewer';
import './styles.css';

export default class CluboEditor extends React.Component {
    constructor(props) {
        super(props);
        let contentState = null;
        if (props.content) {
            contentState = ContentState.createFromText(props.content);
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
        const {id} = this.props;
        return (
            <div>
                <RBS.Tabs id={id}>
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
                            <CluboEditorPreviewer source={this.state.previewerState} />
                        </div>
                    </RBS.Tab>
                </RBS.Tabs>
            </div>
        );
    }
}

