import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import * as C from '../components';



class App extends React.Component {
    render() {

        require('../../css/app.css');
        const {children} = this.props;
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
                                <C.LoginPanel />
                                <C.UserInfoPanel />
                            </aside>
                        </div>
                    </div>
                </section>
                <C.CluboEditorForm></C.CluboEditorForm>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(App);
