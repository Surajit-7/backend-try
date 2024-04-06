require('dotenv').config()

const express = require('express') // it is same as import express from "express"

const app = express()

const port = 8000

app.get('/', (req, res) => {
  res.send("surajit mondal is trying to make a backend") //this is a response means a call back thas lot os variaty
})

app.get('/twitter', (req, res) => {

    res.send("trying to make custom res") 


})

app.get("/login", (req, res) => { //may not work and get this output Cannot GET /login

    // to resolve this , it just takes a restart

    res.send('<h1> please try to be focus')
})

   

app.listen(process.env.PORT, () => { //here the path is port 
  console.log(`Example app listening on port ${port}`)
})