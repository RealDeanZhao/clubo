import * as React from 'react';
import * as RBS from 'react-bootstrap';
import {connect} from 'react-redux';
import {closeSignInModal, authUser} from '../actions';
import {SignInForm} from './';

export interface SignInModalProps extends React.Props<any> {
    showSignInModal: any;
    dispatch: any;
    fields: any;
}

class SignInModalBase extends React.Component<any, {}>{
    close = (): any => {
        const {dispatch} = this.props;
        dispatch(closeSignInModal());
    }
    handleSignIn = (values: any): any => {
        const {dispatch} = this.props;
        const {username, password} = values;
        dispatch(authUser(username, password));
    }
    render() {
        const {showSignInModal, dispatch} = this.props;

        return (
            <div>
                <RBS.Modal show={showSignInModal}>
                    <RBS.Modal.Header closeButton onClick={this.close}>
                        <RBS.Modal.Title >Sign In</RBS.Modal.Title>
                    </RBS.Modal.Header>
                    <RBS.Modal.Body>
                        <SignInForm onSubmit={this.handleSignIn}></SignInForm>
                    </RBS.Modal.Body>
                </RBS.Modal>
                <RBS.Modal.Footer>
                    <RBS.Button onClick={this.close}>Close</RBS.Button>
                </RBS.Modal.Footer>
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any): any => ({
    showSignInModal: state.showSignInModal
});

export const SignInModal = connect(mapStateToProps)(SignInModalBase);

