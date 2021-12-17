const mongoose = require('mongoose')
const validator = require('validator')
//Expense Model using mongoose middleware
const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required:true
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true
  }
})
const User = mongoose.model('User',userSchema)

module.exports = User