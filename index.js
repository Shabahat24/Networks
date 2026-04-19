import http from 'http';
const PORT = 3000;

const server = http.createServer((req, res)=>{

    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hello node.js network i/o');


})

server.listen (PORT, ()=>{console.log(`Server is runnig on! PORT: ${PORT}`)})