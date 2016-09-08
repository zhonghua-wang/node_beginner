/**
 * Created by zhonghua on 16-9-8.
 */
function route(handle, pathname, response, request){
    "use strict";
    console.log('About to route a request for %s', pathname);
    if (typeof  handle[pathname] === 'function'){
        return handle[pathname](response, request);
    }
    else{
        console.log('No request handle found for %s', pathname);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 Not Found');
        response.end();
    }

}
exports.route = route;