
server.get('/info', [
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


server.listen(3000, () => {
    console.log('API rodando na porta 3000')
});