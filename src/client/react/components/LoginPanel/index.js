import * as React from 'react';
import {observer, inject} from 'mobx-react';

@inject('userStore')
@observer
export default class LoginPanel extends React.Component {

    render() {
        //const {user} = this.props.userStore;
       
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
