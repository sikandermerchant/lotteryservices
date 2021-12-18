const express = require('express')
const path = require('path')
const app = express()
const User = require('./models/user')
const userRouter = require('./routers/user')
const port = process.env.port || 3000;
const static_path = path.join(__dirname, '../public')
require('./db/mongoose')

app.use(express.static(static_path));
///Configuring express to automatically parse the incoming data as an object
app.use(express.json())
//configuring use of expense router
app.use(userRouter)

app.listen(port, () =>{
  console.log(`Server is ready on ${port}`)
})