import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import * as C from '../components';

class App extends React.Component {
    render() {

        require('../../css/app.css');
        const {children, authenticated} = this.props;
        const loginPanel = (<C.UserInfoPanel />);
        return (

            <div className='app-clubo'>
                <C.NavBar></C.NavBar>
                <section className='content-wrap'>
                    <div className='containter'>
                        <div className='row'>
                            <aside className='col-md-1 sidebar'>

                            </aside>
                            <main className='col-md-9 main-content'>
                                {children}
                            </main>
                            <aside className='col-md-2 sidebar'>
                                <C.Authenticated authenticated={!authenticated} component={loginPanel}></C.Authenticated>
                                <C.UserInfoPanel />
                            </aside>
                        </div>
                    </div>
                </section>
                <C.TopicEditorModal></C.TopicEditorModal>
                <C.ReplyEditorModal></C.ReplyEditorModal>
                <C.Authenticate></C.Authenticate>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(App);
