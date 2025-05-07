const http = require('http');

const server = http.creatServer(function(){
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Method','GET,POST');
res.setHeader('Access-Control-Allow-Header','Content-Type');

res.writeHead(200, {'Content-Type'; 'text/json'});
res.('{"contactSubject": ["General Enqury","Class","Schudle","Cybersecurity Specialist","Cloud Engineer","UX/UI Designer","Other"]}')
res.end();
});
server.listen(4040);