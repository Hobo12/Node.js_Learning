var express = require('express');
var app = express();
app.listen(3000,function(){
	console.log('Server is listening on port 3000');
});
app.get('/items',function(request, response){
	response.send('This function will return a list of all stored items')
})
