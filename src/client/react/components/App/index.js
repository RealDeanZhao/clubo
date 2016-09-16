import * as React from 'react';
import {observer, inject} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {LoginPanel, NavBar, TopicEditor, ReplyEditor, ShowOrHide} from '../';

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
        const {isAuthenticated} = this.props.appStore;

        return (
            <div>
                <DevTools/>
                <div className='app-container'>
                    {/*<NavBar></NavBar>*/}
                    <div className='left-sidebar'>
                        <div className='left-sidebar-wrapper'>
                            <div className='top'>
                                <a>Item 1</a>
                            </div>
                            <div className='bottom'>
                                <ShowOrHide component={<LoginPanel/>} show={!isAuthenticated}/>
                            </div>
                        </div>
                    </div>
                    <div className='main-content'>{children}</div>
                    <div className='right-sidebar'>
                        <div className='right-sidebar-wrapper'>
                            
                        </div>
                    </div>
                    <TopicEditor/>
                    <ReplyEditor/>
                </div>
            </div>
        );
    }
}
