import * as React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-default'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <a className="navbar-brand" href="#">Clubo</a>

                        </div>
                        <div>
                            <ul className='nav navbar-nav pull-right'>
                                <li><a href='/'>Index</a></li>
                                <li><Link to='/createLocalUser'>Create Local User</Link></li>
                                <li><Link to='/topics/create'> CreateTopic </Link></li>
                                <li> <a href='/'> Unread </a> </li>
                                <li><a href='/getstart'>Getting Started</a></li>
                                <li><a href='/api'>API</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

