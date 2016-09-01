import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import * as C from '../components';

export default class Authenticated extends React.Component {
    render() {
        let { component} = this.props;
        const {authenticated} = this.props;

        if (!authenticated) {
            component = (<div></div>);
        }
        return component;
    }
}

