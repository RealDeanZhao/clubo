import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router';

@inject('topicStore')
@observer
export default class HomePageButton extends React.Component {
    handleClick() {
        const {fetchFirstPageTopics} = this.props.topicStore;
        fetchFirstPageTopics();
    }

    render() {
        return (
            <Link to="/" onClick={this.handleClick.bind(this)}><span className="fa fa-home fa-2x" > Home </span></Link>
        )
    };
}

