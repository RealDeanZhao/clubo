import * as React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';
import {show} from '../modules/cluboEditorModal';

class NavBar extends React.Component {
    onCreateTopicClick(e) {
        const {dispatch} = this.props;
        e.preventDefault();
        dispatch(show());
    }
    render() {
        const {dispatch} = this.props;

        return (
            <div>
                <nav className='navbar navbar-default'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <a className="navbar-brand" href="/">Clubo</a>

                        </div>
                        <div>
                            <ul className='nav navbar-nav pull-right'>
                                <li><a href='/'>Index</a></li>
                                <li><a onClick={this.onCreateTopicClick.bind(this) }>CreateTopic</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({

});


export default connect(mapStateToProps)(NavBar);