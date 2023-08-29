
const express = require('express')
const app = express()
const router = require("./routes");

const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use(express.json())


app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
