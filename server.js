
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
    await mongoose.connect(url)
      app.listen(port, () => {
        console.log('Server escuchando en puerto '+ port+ ' y DB conectada')
      
    })
  }catch(error){
    console.log(error) 
 }
}
