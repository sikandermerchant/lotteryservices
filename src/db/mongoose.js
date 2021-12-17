const mongoose = require('mongoose')
const validator = require ('validator')
mongoose.connect('mongodb://127.0.0.1/lotteryservices',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
})