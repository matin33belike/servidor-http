import http from 'node:http'

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`Servidor funcionando! ${req.method} ${req.url}`);

    res.statusCode = 201
    res.setHeader('Content-type', 'text/plain', 'charset: utf-8');
    res.end("Recurso criado")
});

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`); 
});