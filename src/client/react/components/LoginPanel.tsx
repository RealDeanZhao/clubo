import * as React from 'react';
import {connect} from 'react-redux';
import {showSignInModal} from '../actions';

export interface LoginPanelProps extends React.Props<any> {
    dispatch: any
}

export class LoginPanelBase extends React.Component<LoginPanelProps, {}>{

    showModal = (): any => {
        const {dispatch} = this.props;
        dispatch(showSignInModal());
    };

    render() {
        const {dispatch} = this.props;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Login: </div>
                <div className="panel-body">
                    <div>
                        <a href="#" onClick={this.showModal}>Sign In</a>
                        <span> or </span>
                        <a href="#" >Sign Up</a>
                    </div>
                    <div>
                        <a href="/api/v1/auth/github" className="btn btn-info" role="button">Login With Github</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any): any => ({

});

export const LoginPanel = connect(mapStateToProps)(LoginPanelBase);