import * as React from 'react';
import {TopicRowProps, TopicRow} from './TopicRow';

export interface TopicRowListProps extends React.Props<any> {
    list: [TopicRowProps]
}

export class TopicRowList extends React.Component<TopicRowListProps, [{}]>{
    render() {
        let list = this.props.list.map(function (topic) {
            return (
                <TopicRow {...topic}></TopicRow>
            );
        }, this);
        return <div>list</div>;
    }
}