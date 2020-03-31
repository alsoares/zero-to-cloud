import * as restify from 'restify';
import {environment} from  '../common/environment'
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
               
                this.app.get('/info', [
                    (req, res, next) => {
                        if(req.userAgent() && req.userAgent().includes('MSIE 7.0')){
                            //res.status(400);
                           // res.json({message: 'Atualize seu browser'});
                            
                           let error: any = new Error();
                           error.statusCode = 400;
                           error.message = 'Atualize seu browser';
                           return next(error);
                        }
                        return next()
                
                    }, (req, res, next) => {
                        res.json({
                            browser: req.userAgent(),
                            method: req.method,
                            url: req.href(),
                            path: req.path(),
                            query: req.query
                        });
                        return next()
                    }]);
                
                this.app.listen(environment.server.port, () => {
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