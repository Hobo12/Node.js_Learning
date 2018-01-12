var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response){
    response.send('what do you need?');
});

app.listen(port, function(){
    console.log('Expresss app listening on port ' + port);
});