import * as React from 'react';
import {Link} from 'react-router';

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
            <li className="list-group-item">
                <a className='pull-left' href='{this.props.loginName}'>
                    <img src='' title=''/>
                </a>
                {'   '}
                <span className="reply_count pull-left">
                    <span   title="回复数">


                        {this.props.replyCount}
                    </span>
                    <span  >/</span>

                    <span   title='点击数'>
                        {this.props.visitCount}
                    </span>
                </span>
                {'   '}
                <span className='pull-right'>
                    <span className="">{this.props.lastUpdateTime}</span>
                </span>
                {'   '}
                <div  >
                    <Link className='topic_title' to={'/topics/' + this.props.id}>
                        {this.props.title}
                    </Link>
                </div>
            </li >
        )
    }
}