import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {Router, Route, Link, browserHistory} from 'react-router';

import {ShowOrHide} from '../';

@inject('topicEditorStore')
@inject('topicStore')
@inject('appStore')
export default class NavBar extends React.Component {
    handleCreateTopic(e) {
        const {showModal} = this.props.topicEditorStore;
        showModal();
    }
    handleFirstPage() {
        const {fetchFirstPageTopics} = this.props.topicStore;
        fetchFirstPageTopics();
    }
    handleLogout() {
        const {logout} = this.props.appStore;
        logout();
    }
    render() {
        const {isAuthenticated} = this.props.appStore;
        const createTopicLi = (<li><a onClick={this.handleCreateTopic.bind(this) }>Create Topic</a></li>);
        const logoutLi = (<li><a onClick={this.handleLogout.bind(this) }>Logout</a></li>);
        return (
            <div>
                <nav className='navbar navbar-default'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <Link className="navbar-brand" to="/" onClick={this.handleFirstPage.bind(this) }>Clubo</Link>
                        </div>
                        <div>
                            <ul className='nav navbar-nav pull-right'>
                                <ShowOrHide component={createTopicLi} show={isAuthenticated}/>
                                <ShowOrHide component={logoutLi} show={isAuthenticated}/>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
