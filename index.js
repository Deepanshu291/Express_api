const express = require('express')
const bodyparser = require('body-parser');
const Userrouter = require('./src/routers/User')
const path = require('path');
const hbs = require('hbs');
require('./src/db/Mongodb')

//Enviroment
const app = express()
const port =process.env.PORT || 5000

// Path
const st_path = path.join(__dirname,"./public");
const temp_path = path.join(__dirname,"./templates");
// console.log(temp_path)
const par_path = path.join(__dirname,"./templates/partials");

//Middle Wave 
app.use(bodyparser.json())
   .use(express.json())
   .use(Userrouter)
   .use(express.static(st_path))
   .use(express.urlencoded({extended:false}));
   app.set('view engine', 'hbs');
   app.set("views", temp_path);
   hbs.registerPartials(par_path)
//Listing Port 


app.listen(port, () => console.log(`Example app listening on port ${port}`))