const express = require("express");
const { GetBlogs,
    PostBlog,
    DeleteBlog,
    updateBlog, } = require("../controller/controller");




const route = express.Router();
// console.log("object");
route.get("/", GetBlogs);
route.post("/add", PostBlog);
route.delete("/delete/:id", DeleteBlog);
route.put("/update/:id", updateBlog);


module.exports = route;