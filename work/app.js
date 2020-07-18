var http = request('http');
var express = require("express");
var router = express.Router();
var fs = require('fs');

http.createServer(function(request,response){
 var url = request.url;
 switch(url){
 	case '/':
 	  getStaticFileContent(response,'public/screen.html','text/html');
 	  break;
 	  default:
 	  response.writeHead(404,'content-Type':'text/plain');
response.end('404-page not found');
 	  break;
 }
}).listen(5244);

function getStaticFileContent(response,filepath,contentType) {
	fs.readFile(filepath,function(error,data) {
		if (error) {
			response.writeHead(500,{'contentType':'text/plain'});
			response.end('500 - Internal Server Error.');
		}
		if(data){
			response.writeHead(200,{'contentType':'text/html'});
			response.end(data);
		}
	});
}

router.get("/", function(req, res) {
   // console.log("hello I'm on the start page");
res.render("public/submit");
});
