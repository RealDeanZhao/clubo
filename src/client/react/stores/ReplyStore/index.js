import { observable, action, runInAction, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';

class ReplyStore {
    @observable replies = [];

    @observable current = 1;
    offset = 2;
    recordsPerPage = 20;
    @observable count = 0;

    constructor() {

    }

    @action fetchReplies = async (topicId) => {
        this.replies = [];
        console.log('start to fetch replies');
        const response = await fetch(`/api/v1/topics/${topicId}/replies?page=${this.current}&recordsPerPage=${this.recordsPerPage}`);
        const result = await response.json();
        this.replies = result.list;
        this.count = result.count;
    }

    @action go = (topicId, page) => {
        this.current = page;
        this.fetchReplies(topicId);
    }
}

const store = new ReplyStore();
export default store;
export {ReplyStore};