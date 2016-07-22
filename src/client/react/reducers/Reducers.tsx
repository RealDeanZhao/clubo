import { combineReducers } from 'redux';
import * as All from '../reducers';

const rootReducer = combineReducers({
    topicList: All.topicList,
    showSignInModal: All.showSignInModal
});

export { rootReducer};