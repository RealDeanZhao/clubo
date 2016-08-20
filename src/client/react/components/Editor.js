import * as React from 'react';
import * as RBS from 'react-bootstrap';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import '../../css/topic-editor.css';
import * as C from '../components';


export default class Editor extends React.Component {

    render() {
        const {onChange, value, id, name} = this.props;
        return (
            <div>
                <RBS.Tabs id={id}>
                    <RBS.Tab eventKey={1} title='Edit'>
                        <div>
                            <AceEditor onChange = {onChange}
                                mode='markdown'
                                theme='github'
                                name={name}
                                width='100%'
                                value={value}
                                editorProps={{ $blockScrolling: true }}
                                fontSize={15}
                                >
                            </AceEditor>
                        </div>
                    </RBS.Tab>
                    <RBS.Tab eventKey={2} title='Preview'>
                        <div>
                            <C.EditorPreviewer source={value}></C.EditorPreviewer>
                        </div>
                    </RBS.Tab>
                </RBS.Tabs>
            </div>
        );
    }
}

