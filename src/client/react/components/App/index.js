import * as React from 'react';
import {observer, inject} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Link} from 'react-router';

import {LoginPanel, NavBar, TopicEditor, ReplyEditor, ShowOrHide} from '../';
import GithubSignInButton from '../Buttons/GithubSignInButton';
import SignOutButton from '../Buttons/SignOutButton';
import HomePageButton from '../Buttons/HomePageButton';
import CreateTopicButton from '../Buttons/CreateTopicButton';

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
                        <div className='nav'>
                            <CreateTopicButton />
                            <HomePageButton />
                            <GithubSignInButton />
                            <SignOutButton />
                        </div>
                    </div>
                    <div className='main-content-left'></div>
                    <div className='main-content'>
                        <div className='main-content-inner'>{children}</div>
                    </div>
                </div>
                <TopicEditor/>
                <ReplyEditor/>
            </div >
        );
    }
}
