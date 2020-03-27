const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        cidade: Joi.string().required(),
        uf: Joi.string().required().length(2),

    })
}), OngsController.store);

routes.get('/perfil', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

routes.get('/incidente', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    }),
}), IncidentsController.index);
routes.post('/incidente', IncidentsController.store);

routes.delete('/incidente/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), IncidentsController.delete);

module.exports = routes;