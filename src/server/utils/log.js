var fs = require('fs')
    , Log = require('log')
    , log = new Log('debug', fs.createWriteStream('my.log'));

export default log;