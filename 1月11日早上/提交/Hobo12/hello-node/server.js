var http = require('http');
var port = 3000;
var requestHandler = function(request,response){
	console.log('New requwst to: ' + request.url);
	response.end('Hello, World!')
}
var server = http.createServer(requestHandler);
server.listen(port,function()
{
	console.log('listening on port' + port)
});
