interface IReplyRepository {
    getReply(id: String): any;
    getReplyById(id: String): any;
    getRepliesByTopicId(topicId: String): any;
    addOrUpdate(): any;
    getLastReplyByTopId(topicId: String): any;
    getRepliesByAuthorId(authorId: String): any;
    getCountByAuthorId(authorId: String): any;
}

export {IReplyRepository}