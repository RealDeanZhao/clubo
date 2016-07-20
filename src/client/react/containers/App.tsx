import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch } from 'redux';
import {TopicRowList, TopicRowListProps} from '../components/TopicRowList';

export interface AppProps {
    topicList: TopicRowListProps
}

class App extends React.Component<AppProps, any>{
    render() {
        const {topicList} = this.props;

        return (
            <div>
                <TopicRowList list={topicList.list}></TopicRowList>
            </div>
        );
    }
}

const mapStateToProps = (state: any): AppProps => ({
    topicList: state.topicList
});

export const ConnectedApp = connect(mapStateToProps)(App);
