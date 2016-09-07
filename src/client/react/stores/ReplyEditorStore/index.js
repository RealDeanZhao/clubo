import { observable, action, runInAction, autorunAsync} from 'mobx';

class ReplyEditorStore {
    constructor() {
    }

    @observable show = false;
    @observable replyId = ''
    
    @action showModal = (replyId) => {
        this.show = true;
        this.replyId = replyId;
    }

    @action closeModal = () => {
        this.show = false;
    }
}

const store = new ReplyEditorStore();
export default store;
export {ReplyEditorStore};