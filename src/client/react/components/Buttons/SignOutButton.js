import * as React from 'react';
import {observer, inject} from 'mobx-react';

@inject('appStore')
@observer
export default class SignOutButton extends React.Component {
    render() {
        const {isAuthenticated, logout} = this.props.appStore;
        return (
            <InnerComponent isAuthenticated={isAuthenticated} logout={logout}/>
        )
    };
}

const InnerComponent = ({isAuthenticated, logout}) => {
    if (isAuthenticated) {
       return <a onClick = {logout}><span className="fa fa-sign-out fa-2x" aria-hidden="true"> Sign Out </span></a>;
    } else {
        return null;
    }
};

