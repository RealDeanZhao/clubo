import * as React from 'react';


export interface UserInfoPanelProps extends React.Props<any> {

}

export class UserInfoPanel extends React.Component<UserInfoPanelProps, {}>{
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Panel heading without title</div>
                <div className="panel-body">Panel content</div>
            </div>
        )
    }
}

