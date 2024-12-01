const express = require('express');
const connect = require('./database/db')
// const route = require('./routes/routes')
const cors = require("cors");
const route = require('./route/routes');
// const bodyParser = require('body-parser')

const app = express();
require('dotenv').config();
app.use(express.json())
app.use(cors())
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// app.use(bodyParser.json({limit:'50mb'}))
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


const Port = process.env.PORT  || 5000

app.use(cors())

app.get('/',async (req,res)=>{
  res.send("Welcome done")
})

app.use("/api",route)


app.listen(Port,async()=>{
  console.log("Listing to" , Port );
  try {
    await connect;
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
})