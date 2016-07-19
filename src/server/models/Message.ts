const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const Message = thinky.createModel('Message', {
    type: String,
    masterid: String,
    authorId: String,
    topicId: String,
    replyId: String,
    hasRead: type.boolean().default(false),
    createAt: type.date().default(r.now())
})

export {Message}