import * as React from 'react';

export default class ShowOrHide extends React.Component {

    render() {
        const {component, show} = this.props;

        if (show) {
            return component;
        } else {
            return (<div />)
        }
    }
}