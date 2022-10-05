const Router = require('express').Router();
const usersServices = require('./users.services')
// 
//  /users  [get]
//  /users  [post] --> manejar la info del cliente y crear un new users

//  /users/:id  [get] --> Retornar el user con tal ID  que reciba 

Router.get('/users', usersServices.getUsers);

Router.post('/users', usersServices.createNewUser);

Router.get('/users/:id', usersServices.getOneUser);

module.exports = Router;

