/**
 * Created by zhonghua on 16-9-7.
 */
var http = require('http');
var url = require('url');
//var route = require('./route')

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(pathname);
        console.log('Request %s received', pathname);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('hello world @ ' + new Date().toLocaleTimeString());
        response.end();
    };

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}
exports.start = start;