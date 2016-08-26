import * as React from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import {show} from '../modules/replyEditorModal';
import {connect} from 'react-redux';

class ReplyButton extends React.Component {
    handleClick(e) {
        e.preventDefault();
        const {dispatch, topicId, id} = this.props;
        dispatch(show({ topicId, id }));
    }

    render() {
        return (
            <div>
                <span><a onClick={this.handleClick.bind(this) }>Reply</a></span>
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(ReplyButton);