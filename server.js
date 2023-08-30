
const express = require('express')
const mongoose = require('mongoose')
const routes = require("./routes")
const app = express()
const port = 3000
const url = 
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use('/registro', routes)

async function connectToMongo(){
  try{
    
  }
}
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
