const express = require('express');
const server = express.Router();
const controllerUser = require('../controladores/user');

server.post('/adduser', controllerUser.userSave)

module.exports = server