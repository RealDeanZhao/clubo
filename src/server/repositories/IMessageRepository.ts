interface IMessageRepository {
    getMessagesCountByUserId(userId: String): any;
    getMessageById(id: String): any;
    getMessageRelations(message: any): any;
    getReadMessagesByUserId(userId: String): any;
    getUnreadMessageByUserId(userId: String): any;
    updateMessagesToRead(userId: String): any;
}

export {IMessageRepository}