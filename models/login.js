const mongoose = require('mongoose')

const Login = new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:['inactive', 'active']
  },
  date:{
    type:Date,
    Default:Date.now()
  }
})

module.exports = mongoose.model('Login', Login)
