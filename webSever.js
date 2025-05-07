const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const sever = http.createServer(function (req, res) {
    //var q = url.parse(req.url,true);
    //var file

    let filePath = '.' + req.url;
    if(filePath === './') filePath = './index.html';

    const extname = path.extname(filePath);
    let ContentType = "text/html";
    if(extname === ".css") ContentType = "text/css" 
    if(extname === ".xml") ContentType = "text/xml"
    if(extname === ".js") ContentType = "application/js"
   fs.readFile(filePath,function(err,htmlDoc){
    if(err){
        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end("404 : file not foud" );
    }
    res.writeHead(200, {'Content-Type': ContentType});
    var q = url.parse(req.url, true).query;
    var text = q.fname+ ' '+q.lname;
    res.write(htmlDoc);
    res.end();
   });  
  
});

sever.listen(8080);