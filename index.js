const express = require('express');
const connect = require('./database/db')
// const route = require('./routes/routes')
const cors = require("cors");
const route = require('./route/routes');
const app = express();
require('dotenv').config();
app.use(express.json())
app.use(cors())

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