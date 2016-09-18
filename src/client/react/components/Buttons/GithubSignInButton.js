import * as React from 'react';
import {observer, inject} from 'mobx-react';

@inject('appStore')
@observer
export default class GithubSignInButton extends React.Component {
    render() {
        const {isAuthenticated} = this.props.appStore;
        return (
            <InnerComponent isAuthenticated={isAuthenticated} />
        )
    };
}

const InnerComponent = ({isAuthenticated}) => {
    if (!isAuthenticated) {
        return <a href='/api/v1/auth/github'><span className="fa fa-github fa-3x" aria-hidden="true"></span></a>;
    } else {
        return null;
    }
};

