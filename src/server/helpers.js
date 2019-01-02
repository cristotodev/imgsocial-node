const moment = require('moment');

const helpers = {};

helpers.timeAgo = timestamp => {
    return moment(timestamp).startOf('minute').fromNow();
}

module.exports = helpers;