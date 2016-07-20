import * as React from 'react';

export interface TopicRowProps extends React.Props<any> {
    replyCount: Number,
    visitCount: Number,
    avatarUrl: String,
    loginName: String,
    lastUpdateTime: Date,
    title: String,
    id: String
}

export class TopicRow extends React.Component<TopicRowProps, {}>{

    render() {
        return (
            <div class='cell'>
                <a class='user_avatar pull-left' href='{this.props.loginName}'>
                    <img src='' title=''/>
                </a>
                <span class="reply_count pull-left">
                    <span class="count_of_replies" title="回复数">
                        {this.props.replyCount}
                    </span>
                    <span class="count_seperator">/</span>
                    <span class="count_of_visits" title='点击数'>
                        {this.props.visitCount}
                    </span>
                </span>
                <span class='last_time pull-right'>
                    <span class="last_active_time">{this.props.lastUpdateTime}</span>
                </span>
                <div class="topic_title_wrapper">
                    <a class='topic_title' href='/topic/{this.props.id}' title='{this.props.title}'>
                        {this.props.title}
                    </a>
                </div>
            </div>
        )
    }
}