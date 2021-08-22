const User = require('./controllers/userController');
const express = require('express');
const routes = express.Router()


routes.get('/', User.index)
routes.post('/api/user', User.create);

module.exports = routes;