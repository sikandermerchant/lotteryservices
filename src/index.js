const express = require('express')
const app = express()
const User = require('./models/user')
const userRouter = require('./routers/user')
const port = process.env.port || 3000;
require('./db/mongoose')


///Configuring express to automatically parse the incoming data as an object
app.use(express.json())
//configuring use of expense router
app.use(userRouter)

app.listen(port, () =>{
  console.log(`Server is ready on ${port}`)
})