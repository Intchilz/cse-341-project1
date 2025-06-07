const routes = require('express').Router();

routes.use('/', require('./swagger'));

routes.get('/', (req,res) => {
    //swagger.tags=['Hello World']
    res.send('Hello World');
});

routes.get('/', (req, res) => {res.send('Hello World');});
routes.use('/contacts', require('./contacts'));

module.exports= routes;