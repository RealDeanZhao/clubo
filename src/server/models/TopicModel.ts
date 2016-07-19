const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const TopicModel = thinky.createModel('Topic', {
    title: String,
    content: String,
    authorId: String,
    top: type.boolean().default(false),
    good: type.boolean().default(false),
    lock: type.boolean().default(false),
    replyCount: type.number().default(0),
    visitCount: type.number().default(0),
    collectCount: type.number().default(0),
    createAt: type.date().default(r.now()),
    updateAt: type.date().default(r.now()),
    lastReplyId: String,
    lastReplyAt: type.date().default(r.now()),
    contentIsHtml: type.boolean(),
    tab: String,
    deleted: type.boolean().default(false)
});

export {TopicModel}