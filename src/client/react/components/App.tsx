import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

import * as C from '../components';

class AppBase extends React.Component<any, any>{
    render() {
        const {children} = this.props;
        return (
            <div>
                <C.NavBar></C.NavBar>
                <section className='content-wrap'>
                    <div className='containter'>
                        <div className='row'>
                            <main className='col-md-9 main-content'>
                                {children}
                            </main>
                            <aside className='col-md-3 sidebar'>
                                <C.LoginPanel />
                                <C.UserInfoPanel />
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any): any => ({

});

export const App = connect(mapStateToProps)(AppBase);
