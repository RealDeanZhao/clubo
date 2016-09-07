import * as React from 'react';
import {inject} from 'mobx-react';

@inject('replyEditorStore')
export default class ReplyButton extends React.Component {
    handleClick(e) {
        const {showModal} = this.props.replyEditorStore;
        const {replyId} = this.props;
        showModal(replyId);
    }

    render() {
        return (
            <div>
                <span><a onClick={this.handleClick.bind(this) }>Reply</a></span>
            </div>
        )
    };
}