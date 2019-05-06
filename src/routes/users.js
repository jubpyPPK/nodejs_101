"use strict";

const models  = require('../models');
const express = require('express');
const uuidv4 = require('uuid/v4');
const router  = express.Router();

router.post('/user',(request,response)=>{
    console.log('HI POST METHOD >> create user')

    var username = ''+request.body['username'];
    var password = ''+request.body['password'];

    models.User.create({
        _id : uuidv4().replace(/-/g,''),
        username: username,
        password: password,
        status: '1',
        role: 'admin'
      }).then(function() {
        response.status(201).json()
      });
})

router.put('/user/:userId',(request,response)=>{
    console.log('HI PUT METHOD >> Update user')
    response.status(200).json()
})

router.delete('/user/:userId',(request,response)=>{
    console.log('HI DELETE METHOD >> Delete user')
    response.status(200).json()
})

router.get('/user/:userId',(request,response)=>{
    console.log('HI GET METHOD >> Get user by id')
    response.status(200).json()
})

router.get('/user',(request,response)=>{
    console.log('HI GET METHOD >> Get users')
    models.User.findAll().then((User)=>{
        User.map((User)=>{
            response.status(200).json(User.toJSON())
        })
    });
})

module.exports = router;