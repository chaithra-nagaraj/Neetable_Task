
const express = require('express')
const cors = require('cors')

const {mongoose} = require('./config/database')

const {userRouter} = require('./app/controller/userController')

const port =  3005
const app = express()

app.use(express.json())
app.use(cors())
app.use('/user',userRouter)

app.listen(port,function(){
    console.log("listening to port",port)
})