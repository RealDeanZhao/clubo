import * as React from 'react';
import * as RBS from 'react-bootstrap';
import {connect} from 'react-redux';
const RF = require('redux-form');
const Field = RF.Field;
const reduxForm = RF.reduxForm;

class SignInForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label>Username</label>
                    <Field component='input' className="form-control"  type="text"  placeholder="First Name" name='username'/>
                </div>
                <div>
                    <label>Password</label>
                    <Field component='input' className="form-control"  type="password" placeholder="Password" name='password'/>
                </div>
                <div> </div>
                <div>
                    <button type="submit" className="btn btn-info">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signInForm'
})(SignInForm);
