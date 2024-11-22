const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// let connect =  mongoose.connect("mongodb+srv://abhinav:abhinav@varahe.etletzy.mongodb.net/?retryWrites=true&w=majority&appName=varahe",{ useNewUrlParser: true, useUnifiedTopology: true });
let connect =  mongoose.connect("mongodb+srv://abhinav:abhinav@cluster0.pwqqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
module.exports = connect;