import { observable, action, runInAction, autorun} from 'mobx';
import fetch from 'isomorphic-fetch';

class TopicStore {
    @observable topics = [];
    @observable topic = {};
    @observable replies = [];

    @observable current = 1;
    offset = 2;
    recordsPerPage = 20;
    @observable count = 0;

    constructor() {
        
    }

    @action fetchTopic = async (id) => {
        this.topic = {};
        console.log('start to fetch single topic')
        const response = await fetch(`/api/v1/topics/${id}`);
        const result = await response.json();
        this.topic = result;
    }

    @action fetchTopics = async () => {
        console.log('start to fetch topics');

        const response = await fetch(`/api/v1/topics?page=${this.current}&recordsPerPage=${this.recordsPerPage}`);
        const result = await response.json();
        this.topics = result.list;
        this.count = result.count;
    }

    @action go = (page) => {
        this.current = page;
        this.fetchTopics();
    }
}

const store = new TopicStore();
export default store;
export {TopicStore};