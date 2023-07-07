const http = require('http');
const url = require('url');
const fs = require('fs');
const dt = require('./datemodule');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    fs.readFile('demoHtml.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});