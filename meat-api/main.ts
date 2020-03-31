import { Server } from './server/server'

const server = new Server();

server.bootstrap()
    .then(s => {
        console.log('Servidor rodando em', s.app.address())
    }).catch(error => {
        console.log('Falha ao iniciar servidor');
        console.error(error);
        process.exit(1);
    })