import * as React from 'react';
import {observer, inject} from 'mobx-react';

@inject('userStore')
@observer
export default class LoginPanel extends React.Component {

    render() {

        return (
            <div>
                <a href='/api/v1/auth/github'><span className="fa fa-github fa-3x" aria-hidden="true"></span></a>
            </div>
        )
    }
}
