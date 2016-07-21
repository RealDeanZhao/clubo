import * as React from 'react';


export interface NavBarProps extends React.Props<any> {

}

export class NavBar extends React.Component<NavBarProps, {}>{
    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container'>
                    <div className='navbar-header'>
                        <a className="navbar-brand" href="#">Clubo</a>

                    </div>
                    <div>
                        <ul className='nav navbar-nav pull-right'>
                            <li><a href='/'>首页</a></li>
                            <li>
                                <a href='/'>
                                    未读消息
                                </a>
                            </li>

                            <li><a href='/getstart'>新手入门</a></li>
                            <li><a href='/api'>API</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

