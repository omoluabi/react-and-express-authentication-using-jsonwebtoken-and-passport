const express = require('express')
const app = express()
const Login = require('./models/login')
const Post = require('./models/post')
const mongoose = require('mongoose')
const passport = require('passport')
const strategy = require('./passport')
const jwt = require("jsonwebtoken")
const keys = require('./config/keys')

app.use(passport.initialize())
strategy(passport)
app.set('useFindAndModify', false)

// connect to database
mongoose.connect('mongodb+srv://crudUser:crudPass@cluster0-fdmkk.mongodb.net/authDB?retryWrites=true', {useNewUrlParser: true,
useCreateIndex: true, useUnifiedTopology:true}, ()=>{
 console.log('Connected to the database');
})

//middlewres
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/signup', (req, res)=>{
  const {email, password} = req.body
  Login.create({email,password,status:'inactive'})
  .then((data) =>res.json(data))
  .catch((err) =>{
    console.log(err);
    res.json(err)
  })
})

//login and set the Bearer token for authentication
app.post('/api/login', (req, res)=>{
  const {email, password} = payload = req.body
  try{
    Login.findOne({email, password, status:'active'})
    .then(data=>{
      if(data){
        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({data, status:true, message:'You have successfully logged in', token: "Bearer " + token});
        })
      }else {
        res.json({status:false, message:'Password or email incorrect.'})
      }
    })
    .catch(err=>{
      res.json({status:false, message:err.message})
    })
  }catch(err){
    res.json({status:false, message:err.message})
  }
})

app.get('/api/posts', passport.authenticate("jwt", { session: false }), (req, res)=>{
  Post.find()
  .then((data) =>res.json(data))
  .catch((err) =>{
    console.log(err)
    res.json(err)
  })
})

app.post('/api/addPosts', (req, res)=>{
  const {title, summary} = req.body
  Post.create({title, summary})
  .then((data) =>res.json(data))
  .catch((err) =>{
    console.log(err)
    res.json(err)
  })
})

app.get('/api/profile/:email', passport.authenticate("jwt", { session: false }), (req, res)=>{
  Login.find({email:req.params.email})
  .select(['email','status', '-_id'])
  .then((data) =>res.json(data))
  .catch((err) =>{
    console.log(err)
    res.json(err)
  })
})

//set-up view for production
if(process.env.NODE_ENV === 'production'){
	app.use(express.static('views/build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'build', 'index.html'))
  })
}

app.all('*', (req, res)=>{
  res.status(401).send('Invalid request')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`The app is running on port ${PORT}`))
