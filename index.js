var start = require('./start');
var stop = require('./stop');

exports.handler = (event, context, callback) => {
    event.clusters.forEach((cluster) => {
        switch(event.action) {
            case 'stop':
                stop(cluster);
                break;
            case 'start':
                start(cluster);
                break;
            default:
                throw `Invalid action ${event.action}`;
        }
    })
    callback(null, 'Complete!');
};
