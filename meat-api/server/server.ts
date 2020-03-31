import * as restify from 'restify';

export class Server {

    app: restify.Server;
    initRoutes(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                this.app = restify.createServer({
                    name: 'mead-api',
                    version: '1.0.0'
                });

                this.app.use(restify.plugins.queryParser());
               
                this.app.listen(3000, () => {
                    console.log('API rodando na porta 3000')
                    resolve(this.app);
                });


            } catch (error) {
                reject(error);
            }
        });
    };

    bootstrap(): Promise<Server> {
        return this.initRoutes().then(() => this);

    }
}