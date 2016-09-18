import * as React from 'react';
import {observer, inject} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Link} from 'react-router';

import {LoginPanel, NavBar, TopicEditor, ReplyEditor, ShowOrHide} from '../';
import GithubSignInButton from '../Buttons/GithubSignInButton';
import SignOutButton from '../Buttons/SignOutButton';

@inject('appStore')
@observer
export default class App extends React.Component {
    componentDidMount() {
        const {verifyToken} = this.props.appStore;
        verifyToken();
    }

    render() {
        require('./styles.css');
        const {children} = this.props;
        
        return (
            <div>
                <DevTools/>
                <div className='app-container'>
                    {/*<NavBar></NavBar>*/}
                    <div className='left-sidebar'>
                        <div className='left-sidebar-wrapper'>
                            <div className='top'>
                                <div>
                                    <a role="button"><span className="fa fa-pencil fa-2x" aria-hidden="true">Write</span></a>
                                </div>
                                <div>
                                    <Link className="fa fa-home fa-2x" to="/" >Home</Link>
                                </div>
                            </div>
                            <div className='bottom'>
                                <div>
                                    <GithubSignInButton />
                                </div>
                                <div>
                                    <SignOutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-content-left'></div>
                    <div className='main-content'>{children}</div>
                    <div className='main-content-right'></div>
                    {/*<div className='right-sidebar'>
                        <div className='right-sidebar-wrapper'>
                            
                        </div>
                    </div>*/}
                    <TopicEditor/>
                    <ReplyEditor/>
                </div>
            </div>
        );
    }
}
