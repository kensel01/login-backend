const { Router } = require('express');
const User = require('./auth.controller');
module.exports =(Router)=> {
    Router.post('/register', User.createUser);
    Router.post('/login', User.loginUser);
}