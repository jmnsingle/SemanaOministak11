const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store )

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


routes.get('/profiles', ProfileController.index);


module.exports = routes;