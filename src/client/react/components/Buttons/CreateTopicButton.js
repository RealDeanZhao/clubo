import * as React from 'react';
import {observer, inject} from 'mobx-react';

@inject('appStore')
@inject('topicEditorStore')
@observer
export default class CreateTopicButton extends React.Component {
    render() {
        const {isAuthenticated, logout} = this.props.appStore;
        const {showModal} = this.props.topicEditorStore;
        return (
            <InnerComponent isAuthenticated={isAuthenticated} showModal={showModal}/>
        )
    };
}

const InnerComponent = ({isAuthenticated, showModal}) => {
    if (isAuthenticated) {
        return <a role="button" onClick={showModal}><span className="fa fa-pencil fa-2x" aria-hidden="true"> Write </span></a>
    } else {
        return null;
    }
};

