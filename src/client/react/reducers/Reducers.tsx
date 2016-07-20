import { combineReducers } from 'redux';
import {topicReducer} from './TopicListReducer';

const rootReducer = combineReducers({
    topicReducer
});

export { rootReducer};