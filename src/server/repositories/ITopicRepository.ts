interface ITopicRepository {
    getTopicById(id: String): any;
    getCountByQuery(query: String): any;
    getTopicsByQuery(query: String): any;
    getFullTopic(id: String): any;
    getLimit5w(): any;
    updateLastReply(topicId: string, replyId: string): any;
    getTopic(id: String): any;
    reduceCount(id: String): any;
    addOrUpdate(): any;
}
export {ITopicRepository}