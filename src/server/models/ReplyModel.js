const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const ReplyModel = thinky.createModel('Reply', {
    content: String,
    topicId: String,
    authorId: String,
    replyId: String,
    createAt: type.date().default(function () {
        return new Date()
    }),
    updateAt: type.date().default(function () {
        return new Date()
    }),
    contentIsHtml: type.boolean(),
    ups: String,
    delete: type.boolean().default(false)
})

ReplyModel.ensureIndex("updateAt");

export {ReplyModel}