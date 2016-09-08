import { observable, action, runInAction, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';

class ReplyStore {
    @observable replies = [];
    @observable topicId = '';
    @observable current = 1;

    offset = 2;
    recordsPerPage = 20;
    @observable count = 0;

    constructor() {

    }

    @action fetchReplies = async (topicId, query) => {
        this.replies = [];
        if (query && query.current) {
            this.current = query.current;
        }
        if (typeof topicId !== 'undefined') {
            this.topicId = topicId;
        }
        console.log('start to fetch replies');
        const response = await fetch(`/api/v1/topics/${topicId}/replies?page=${this.current}&recordsPerPage=${this.recordsPerPage}`);
        const result = await response.json();
        this.replies = result.list;
        this.count = result.count;
    }

    @action createReply = async (reply) => {
        reply.topicId = this.topicId;
        const response = await fetch(`/api/v1/topics/${this.topicId}/replies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reply)
        });
    }

    @action go = (topicId, page) => {
        this.current = page;
        this.fetchReplies(topicId);
    }
}

const store = new ReplyStore();
export default store;
export {ReplyStore};