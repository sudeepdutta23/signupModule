const { Router } = require('express')
const express = require('express')
const signUpTemplateCopy = require('../models/SignUpmodel')

const router =  express.Router()

router.post('/signup',(request,response)=>{
    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        userName: request.body.userName,
        email: request.body.email,
        password:  request.body.password
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data);
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router