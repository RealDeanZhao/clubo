import { observable, action, runInAction, autorunAsync} from 'mobx';

class TopicEditorStore {
    constructor() {
    }

    @observable show = false;

    @action showModal = () => {
        this.show = true;
    }

    @action closeModal = () => {
        this.show = false;
    }
}

const store = new TopicEditorStore();
export default store;
export {TopicEditorStore};