import * as React from 'react';


export interface LoginPanelProps extends React.Props<any> {

}

export class LoginPanel extends React.Component<LoginPanelProps, {}>{
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Panel heading without title</div>
                <div className="panel-body">
                    <a href="/auth/github" className="btn btn-info" role="button">Login With Github</a>
                </div>
            </div>
        )
    }
}

