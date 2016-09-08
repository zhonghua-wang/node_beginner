/**
 * Created by zhonghua on 16-9-7.
 */

var server = require('./server');
var router = require('./route')
var requestHandlers = require('./requestHandlers');

var handle = {};

handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);