import {MessageModel} from '../models/MessageModel';
const thinky = require('thinky')();
const r = thinky.r;


interface IMessageRepository {
    getMessagesCountByUserId(userId: String): any;
    getMessageById(id: String): any;
    getMessageRelations(message: any): any;
    getReadMessagesByUserId(userId: String): any;
    getUnreadMessageByUserId(userId: String): any;
    updateMessagesToRead(userId: String): any;
}

export {IMessageRepository}