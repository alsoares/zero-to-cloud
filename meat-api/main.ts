import * as restify from 'restify';

const server = restify.createServer({
    name: 'mead-api',
    version: '1.0.0'
});

server.get('/hello', (req, res, next) => {
    res.json({message: 'Hello'});
    return next()
});


server.listen(3000, () => {
    console.log('API rodando na porta 3000')
});