import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import topics from './topics';
import replies from './replies';
import signInModal from './signInModal';
import topicEditorModal from './topicEditorModal';
import replyEditorModal from './replyEditorModal';
import topicListPagination from './topicListPagination';

export default combineReducers({
    topics,
    replies,
    signInModal,
    topicEditorModal,
    replyEditorModal,
    topicListPagination,
    routing: routerReducer,
    form: formReducer
});