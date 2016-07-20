
interface ITopicCollectRepository {
    getTopicCollect(userId: String, topicId: String): any;
    getTopicCollectsByUserId(userId: string): any;
    addOrUpdate(userId: string, topicId: string): void;
    remove(userId: string, topicId: String): void;
}

export {ITopicCollectRepository}

