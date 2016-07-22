import * as React from 'react';
import {connect} from 'react-redux';
import * as C from '../components';

export interface AppProps extends React.Props<any> {
    dispatch: any
}

class AppBase extends React.Component<AppProps, any>{
    render() {

        return (
            <div>
                <C.NavBar></C.NavBar>
                <section className='content-wrap'>
                    <div className='containter'>
                        <div className='row'>
                            <main className='col-md-9 main-content'>
                                <C.TopicList></C.TopicList>
                            </main>
                            <aside className='col-md-3 sidebar'>
                                <C.LoginPanel></C.LoginPanel>
                                <C.UserInfoPanel></C.UserInfoPanel>
                            </aside>
                        </div>
                    </div>
                </section>
                <C.SignInModal></C.SignInModal>
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any): any => ({

});

export const App = connect(mapStateToProps)(AppBase);
