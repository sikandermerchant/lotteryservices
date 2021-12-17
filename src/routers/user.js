const express = require('express')
const router = new express.Router()
const User = require('../models/user')

 
//User End-points
///Endpoint to CREATE user
router.post('/users',async(req,res) => {
  try{
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  }catch(e) {
    res.status(500).send(e)
  } 
})

module.exports = router