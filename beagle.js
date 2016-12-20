<<<<<<< HEAD
//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
//Lets define a port we want to listen to
const PORT=8000;
//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

//A sample GET request
dispatcher.onGet("/beagles", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Beagle Sniffs Code');
});

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});
//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
=======
//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
//Lets define a port we want to listen to
const PORT=8000;
//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

//A sample GET request eds
dispatcher.onGet("/beagles", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Beagles Sniff Code');
});

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});
//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works I think!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. .....
    console.log("Server listening on: http://localhost:%s", PORT);
});
>>>>>>> 332804c856ee168a6d2e4f87ca090c3555a18559
