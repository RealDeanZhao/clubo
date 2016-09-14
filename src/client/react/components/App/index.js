import * as React from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import reactCookie from 'react-cookie';

import {LoginPanel, NavBar, TopicEditor, ReplyEditor, HideWhenAuthenticated} from '../';

export default class App extends React.Component {
    componentDidMount() {

    }

    render() {
        require('./app.css');
        const {children, authenticated} = this.props;

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
                                <HideWhenAuthenticated component={<LoginPanel/>}/>
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
