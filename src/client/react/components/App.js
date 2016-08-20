import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

import * as C from '../components';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import '../../css/app.css';

class App extends React.Component {
    render() {

        const {children} = this.props;
        return (
            <div className='app'>
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
                <C.TopicEditor></C.TopicEditor>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(App);
