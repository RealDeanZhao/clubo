import * as React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import {connect} from 'react-redux';
import {syncTopicDraft} from '../actions/TopicAction';

class CluboEditor extends React.Component {
    onDraftChange(dispatch) {
        return function (newValue) {
            dispatch(syncTopicDraft(newValue));
        }
    }
    render() {
        const {dispatch} = this.props;
        return (
            <AceEditor onChange = {this.onDraftChange(dispatch) } 
                mode='markdown' 
                theme='github' 
                name='haha-div' 
                width='100%' 
                height='90%'></AceEditor>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(CluboEditor);



