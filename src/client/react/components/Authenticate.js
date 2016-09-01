import * as React from 'react';
import {connect} from 'react-redux';
import {_auth} from '../modules/auth';


class Authenticate extends React.Component {
    componentWillMount() {
        const {dispatch, token} = this.props;
        dispatch(_auth(token));
    }
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    token: state.auth.token
});

export default connect(mapStateToProps)(Authenticate);

