import * as React from 'react';
import {TopicRowProps, TopicRow} from './TopicRow';
import {connect} from 'react-redux';
import {getTopic} from '../actions/TopicAction';

class TopicDetail extends React.Component {
    componentWillMount() {
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
    };
}

const mapStateToProps = (state, ownProps) => ({
    topicDetail: state.topicDetail,
    id: ownProps.params.id
});


export default connect(mapStateToProps)(TopicDetail);
