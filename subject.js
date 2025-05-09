const http = require('http');

const server = http.creatServer(function(req,res){
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Method','GET,POST');
res.setHeader('Access-Control-Allow-Header','Content-Type');

res.writeHead(200, {'Content-Type':'text/json'});
res.write('{"contactSubject": ["General Enqury","Class","Schudle","Cybersecurity Specialist","Cloud Engineer","UX/UI Designer","Other","kai"]}');
res.end();
});
server.listen(4000);