const http = require('http');
const url = require('url');
const fs = require('fs');
const dt = require('./datemodule');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.write('Hello World! The date and time are currently: ' + dt.myDateTime());
    res.write(' ' + req.url + ' ');
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.end(txt);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});