import * as React from 'react';
import {connect} from 'react-redux';

class LoginPanel extends React.Component {

    render() {
        const {dispatch} = this.props;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Login: </div>
                <div className="panel-body">
                    <div>
                        <a href='/api/v1/auth/github' className='btn btn-info' role='button'>Login With Github</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(LoginPanel);