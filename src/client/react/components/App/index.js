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
        require('./app.css');
        const {children} = this.props;
        const {isAuthenticated} = this.props.appStore;

        return (
            <div className='app-clubo'>
                <DevTools/>
                <NavBar></NavBar>
                <section className='content-wrap'>
                    <div className='containter'>
                        <div className='row'>
                            <aside className='col-md-1 sidebar'>

                            </aside>
                            <main className='col-md-9 main-content'>
                                {children}
                            </main>
                            <aside className='col-md-2 sidebar'>
                                <ShowOrHide component={<LoginPanel/>} show={!isAuthenticated}/>
                            </aside>
                        </div>
                    </div>
                </section>
                <TopicEditor/>
                <ReplyEditor/>
            </div>
        );
    }
}
