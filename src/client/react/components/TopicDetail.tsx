import * as React from 'react';
import {TopicRowProps, TopicRow} from './TopicRow';
import {connect} from 'react-redux';
import {getTopic} from '../actions/TopicAction';

class TopicDetailBase extends React.Component<any, {}>{
    componentWillMount = function (): any {
        const {dispatch, id} = this.props;
        dispatch(getTopic(id));
    };

    render() {
        const {topicDetail} = this.props;
        return (
            <div>
                {topicDetail.content}
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any): any => ({
    topicDetail: state.topicDetail,
    id: ownProps.params.id
});


export const TopicDetail = connect(mapStateToProps)(TopicDetailBase);
