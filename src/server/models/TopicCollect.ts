const thinky = require('thinky')();
const type = thinky.type;
const r = thinky.r;

const TopicCollect = thinky.createModel('TopicCollect', {
    userId: String,
    topicId: String,
    createAt: type.date().default(r.now())
});

export {TopicCollect}