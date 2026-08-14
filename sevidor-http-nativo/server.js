import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const server = http.createServer();

const requisicao = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && urlObj.pathname === '/saudacao') {
        const nome = urlObj.searchParams.get('nome');
        return res.end(JSON.stringify({"nome" : nome}));
    } else if(req.method === 'GET' && urlObj.pathname === '/') {
        return res.end(JSON.stringify({"data" : "Esta é a pagina inicial"}))

    } else if(req.method === 'GET' && urlObj.pathname === '/contato') {
        return res.end(JSON.stringify({"data": [{"telefone": "67 99999-9999", "email" : "email@email.com"}]}))

    } else if(req.method === 'GET' && urlObj.pathname === '/produtos') {
        return res.end(JSON.stringify({"data": [{"batatinha": "R$67,00", "linguiça" : "R$69,99"}]}))
    } else if(req.method === 'GET' && urlObj.pathname === '/status') {
        return res.end(JSON.stringify({"status" : "ok"}))
    }


    return res.end(JSON.stringify({ "chave": "valor" }));


    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    res.end();
}

server.on('request', requisicao);

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});			

