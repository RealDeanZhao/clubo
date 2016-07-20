import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch } from 'redux';
import {TopicRowList, TopicRowListProps} from '../components/TopicRowList';
import {NavBar} from '../components/NavBar';

export interface AppProps {
    topicList: TopicRowListProps
}

class App extends React.Component<AppProps, any>{
    render() {
        const {topicList} = this.props;
        console.log(topicList.topicList);
        return (
            <div>
                <NavBar></NavBar>
                <section className='content-wrap'>
                    <div className='containter'>
                        <div className='row'>
                            <main className='col-md-9 main-content'>
                                <TopicRowList topicList={topicList.topicList}></TopicRowList>
                            </main>
                            <aside className='col-md-3 sidebar'>
                                <div className="panel panel-default">
                                    <div className="panel-heading">Panel heading without title</div>
                                    <div className="panel-body">Panel content</div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state: any): AppProps => ({
    topicList: state.topicList
});

export const ConnectedApp = connect(mapStateToProps)(App);
