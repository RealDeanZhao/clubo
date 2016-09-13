import * as React from 'react';
import {observer, inject} from 'mobx-react';
import { withRouter } from 'react-router';

import form from './form.js';

@withRouter
@inject('userStore')
@observer
export default class UserForm extends React.Component {

    handleClick() {
        const {updateUser} = this.props.userStore;
        const {params, router} = this.props;
        let localUser = form.values();
        localUser.id = params.id;
        localUser.active = true;
        updateUser(localUser);
        router.push({
            pathname: '/'
        });
    }

    render() {
        return (
            <div>
                <input className="form-control"
                    name={form.$('username').name}
                    value={form.$('username').value}
                    onChange={form.$('username').sync}
                    placeholder="User Name"
                    />
                <input className="form-control"
                    name={form.$('displayName').name}
                    value={form.$('displayName').value}
                    onChange={form.$('displayName').sync}
                    placeholder='Display Name'
                    />
                <button className="btn btn-info" onClick={() => { this.handleClick() } }>Submit</button>
            </div >
        )
    };
}


