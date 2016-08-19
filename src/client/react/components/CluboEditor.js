import * as React from 'react';
import * as RBS from 'react-bootstrap';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import {connect} from 'react-redux';
import {syncTopicDraft, closeCluboEditorModal} from '../actions';
const RF = require('redux-form');
const Field = RF.Field;
const reduxForm = RF.reduxForm;

class CluboEditor extends React.Component {
    onDraftChange(dispatch) {
        
        return function (newValue) {
            console.log(newValue)
            //dispatch(syncTopicDraft(newValue));
        }
    }
    close(dispatch) {
        return function () {
            dispatch(closeCluboEditorModal());
        }
    }

    render() {
        const {dispatch, showCluboEditorModal} = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <RBS.Modal show={showCluboEditorModal}>
                        <RBS.Modal.Body>
                            <div>
                                <Field component='input' className="form-control" placeholder="Title" name='title'/>
                            </div>
                            <ul className='nav nav-tabs'>
                                <li role='presentation' className='active'><a onClick={this.onEditClick}>Edit</a></li>
                                <li role='presentation'><a onClick={this.onPreviewClick}>Preview</a></li>
                            </ul>
                            <div>
                                <Field name="content" component={props =>
                                    <AceEditor onChange = {props.input.onChange}
                                        mode='markdown'
                                        theme='github'
                                        name='haha-div'
                                        width='100%'
                                        value={props.input.value}
                                        >
                                    </AceEditor>
                                }/>
                            </div>
                        </RBS.Modal.Body>
                        <RBS.Modal.Footer>
                            <RBS.Button onClick={this.close(dispatch) }>Close</RBS.Button>
                        </RBS.Modal.Footer>
                    </RBS.Modal>

                </form>
            </div>
        );
    }
}



CluboEditor = reduxForm({
    form: 'cluboEditorForm'
})(CluboEditor);

const mapStateToProps = (state, ownProps) => ({
    showCluboEditorModal: state.showCluboEditorModal
});
export default connect(mapStateToProps)(CluboEditor);
