const express = require('express')
const bodyparser = require('body-parser');
const Userrouter = require('./src/routers/User')
require('./src/db/Mongodb')

//Enviroment
const app = express()
const port =process.env.PORT || 5000

//Middle Wave 
app.use(bodyparser.json())
   .use(express.json())
   .use(Userrouter);

//Listing Port 


app.listen(port, () => console.log(`Example app listening on port port!`))