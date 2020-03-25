const express = require('express');
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// routes.options("/*", function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.sendStatus(200);
// });
//
// routes.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

routes.get('/perfil', ProfileController.index);

routes.get('/incidente', IncidentsController.index);
routes.post('/incidente', IncidentsController.store);
routes.delete('/incidente/:id', IncidentsController.delete);

module.exports = routes;