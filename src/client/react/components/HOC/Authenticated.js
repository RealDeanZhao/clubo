import * as React from 'react';
import {observer, inject} from 'mobx-react';

@inject('appStore')
@observer
export class ShowWhenAuthenticated extends React.Component {

    render() {
        const {isAuthenticated} = this.props.appStore;
        const {component} = this.props;

        if (isAuthenticated) {
            return component;
        } else {
            return (<div />)
        }
    }
}

@inject('appStore')
@observer
export class HideWhenAuthenticated extends React.Component {

    render() {
        const {isAuthenticated} = this.props.appStore;
        const {component} = this.props;

        if (isAuthenticated) {
            return (<div />)
        } else {
            return component;
        }
    }
}
