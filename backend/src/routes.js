const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate'); 

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store )

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(14),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }),
}) , OngController.store);

routes.get('/ongs', OngController.index);

routes.post('/incidents', celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(), 
  }).unknown(),
}), IncidentController.store);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}) , IncidentController.index);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profiles', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(), 
  }).unknown(),
}), ProfileController.index);


module.exports = routes;