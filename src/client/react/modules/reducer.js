import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import topics from './topics';
import replies from './replies';
import signInModal from './signInModal';
import cluboEditorModal from './cluboEditorModal';

export default combineReducers({
    topics,
    replies,
    signInModal,
    cluboEditorModal,
    routing: routerReducer,
    form: formReducer
});