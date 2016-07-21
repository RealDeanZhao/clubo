const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const MessageModel = thinky.createModel('Message', {
    type: String,
    masterId: String,
    authorId: String,
    topicId: String,
    replyId: String,
    hasRead: type.boolean().default(false),
    createAt: type.date().default(Date.now())
})

export {MessageModel}