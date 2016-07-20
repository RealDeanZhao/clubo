import * as React from 'react';
import {TopicRowProps, TopicRow} from './TopicRow';

export interface TopicRowListProps extends React.Props<any> {
    topicList: [TopicRowProps]
}

export class TopicRowList extends React.Component<TopicRowListProps, [{}]>{
    render() {
        const {topicList} = this.props;
        let key = 0;
        let list = topicList.map(function (topic) {
            return (
                <TopicRow key ={key++} {...topic}></TopicRow>
            );
        }, this);
        return (
            <ul className="list-group">
                <li className="list-group-item"><a>{'All'}{'  '}</a><a>{'Good'}{'  '}</a><a>{'Share'}{'  '}</a></li>
                {list}

                <ul className="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo; </span>
                        </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo; </span>
                        </a>
                    </li>
                </ul>
            </ul>
        );
    }
}