import * as React from 'react';
import * as RBS from 'react-bootstrap';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import fetch from 'isomorphic-fetch';

class UserCreate extends React.Component {
    componentWillMount() {
       
    }

    handleSubmit(values) {
        console.log(values);
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form>
                <div>
                    <label>Username</label>
                    <Field component='input' className="form-control"  type="text"  placeholder="First Name" name='username'/>
                </div>
                <div>
                    <label>Email</label>
                    <Field component='input' className="form-control"  type="email"  placeholder="Email" name='email'/>
                </div>
                <div> </div>
                <div>
                    <button onClick={handleSubmit(this.handleSubmit.bind(this)) } className="btn btn-info">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'userCreateForm'
})(UserCreate);
