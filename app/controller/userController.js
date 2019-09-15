const express = require('express')
const router = express.Router()
const {User} = require('../models/User')


router.get('/',function(req,res){
    User.find()
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.post('/',function(req,res){
    const body = req.body
    const user = new User(body)
    user.save()
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
})


router.get('/:id',function(req,res){
    const id = req.params.id
    User.findById(id)
    .then(function(user){
        if(user){
            res.send(user)
        }else{
            res.send({})
        }
        
    })
    .catch(function(err){
        res.send(err)
    })
})



router.put('/:id',function(req,res){
    const id = req.params.id
    const body = req.body
    User.findByIdAndUpdate(id, { $set:body }, {new : true, runValidtaors:true})
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.delete('/:id',function(req,res){
    const id = req.params.id
    User.findByIdAndDelete(id)
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
})


module.exports = {
    userRouter:router
}