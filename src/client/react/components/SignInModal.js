import * as React from 'react';
import * as RBS from 'react-bootstrap';
import {connect} from 'react-redux';
import {closeSignInModal, authUser} from '../actions';
import {SignInForm} from './';

class SignInModal extends React.Component {
    close() {
        const {dispatch} = this.props;
        dispatch(closeSignInModal());
    };

    handleSignIn() {
        const {dispatch} = this.props;
        const {username, password} = values;
        dispatch(authUser(username, password));
    };

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
    };
}

const mapStateToProps = (state, ownProps) => ({
    showSignInModal: state.showSignInModal
});

export default connect(mapStateToProps)(SignInModal);

