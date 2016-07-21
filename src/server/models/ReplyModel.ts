const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const ReplyModel = thinky.createModel('Reply', {
    content: String,
    topicId: String,
    authorId: String,
    replyId: String,
    createAt: type.date().default(Date.now()),
    updateAt: type.date().default(Date.now()),
    contentIsHtml: type.boolean(),
    ups: String,
    delete: type.boolean().default(false)
})

export {ReplyModel}