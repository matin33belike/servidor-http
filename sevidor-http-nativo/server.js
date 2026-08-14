import http from 'node:http'

const porta = 3000

const server = http.createServer();

const hora = new Date().toISOString()

server.on('request', (req, res) => {
    console.log(`Servidor funcionando! ${req.method} ${req.url}`);
    console.log(`no horário ${hora}`);
    

    res.statusCode = 201
    res.setHeader('Content-type', 'application/json', 'charset: utf-8');
    res.end(JSON.stringify({"status":"ok"}))
});

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`); 
});