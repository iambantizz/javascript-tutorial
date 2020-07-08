const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('css1.html')
const about = fs.readFileSync('./css2.html')
const services = fs.readFileSync('./css3.html')
const contact = fs.readFileSync('./css4.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/css2'){
        res.end(css2);
    }
    else if(url == '/css3'){
        res.end(css3);
    }
    else if(url == '/css4'){
        res.end(css4);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
