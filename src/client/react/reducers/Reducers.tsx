import { combineReducers } from 'redux';
import {topicList} from './TopicListReducer';

const rootReducer = combineReducers({
    topicList
});

export { rootReducer};