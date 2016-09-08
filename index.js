/**
 * Created by zhonghua on 16-9-7.
 */

var server = require('./server');
var router = require('./route')
server.start(router.route);