/**
 * Created by zhonghua on 16-9-7.
 */
var http = require('http');
var url = require('url');
//var route = require('./route')

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for %s received.', pathname);
        route(handle, pathname, response, request);
    };

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;