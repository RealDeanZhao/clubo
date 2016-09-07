import * as React from 'react';
import {observer} from 'mobx-react';

@observer
export default class LoginPanel extends React.Component {

    render() {
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
