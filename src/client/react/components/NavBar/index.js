import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {Router, Route, Link, browserHistory} from 'react-router';

@inject('topicEditorStore')
@inject('topicStore')
export default class NavBar extends React.Component {
    handleCreateTopic(e) {
        const {showModal} = this.props.topicEditorStore;
        showModal();
    }
    handleFirstPage() {
        const {fetchFirstPageTopics} = this.props.topicStore;
        fetchFirstPageTopics();
    }
    render() {
        return (
            <div>
                <nav className='navbar navbar-default'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <Link className="navbar-brand" to="/" onClick={this.handleFirstPage.bind(this) }>Clubo</Link>
                        </div>
                        <div>
                            <ul className='nav navbar-nav pull-right'>
                                <li><Link to='/' onClick={this.handleFirstPage.bind(this) }>Index</Link></li>
                                <li><a onClick={this.handleCreateTopic.bind(this) }>CreateTopic</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
