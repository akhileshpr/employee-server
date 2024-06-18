require('dotenv').config()
require('./DATABASE/connection')
const express=require('express')
const cors=require('cors')
const router = require('./Routes/router')
const taskServer=express()
taskServer.use(cors())
taskServer.use(express.json())
taskServer.use(router)

const PORT=3000
taskServer.listen(PORT,()=>{
    console.log(`server run at port ${PORT}`);
})

//to resolve get request
taskServer.get('/',(req,res)=>{
      res.send("<h1 style=color:red>task server started and waiting for client request</h1>")
})
taskServer.post('/',(req,res)=>{
    res.send("<h1 style=color:red>Post Request</h1>")
})