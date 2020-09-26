const express = require("express");
const path = require("path");




const Route = express.Router();


Route.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","FrontEnd","video.html"))
})




module.exports = Route; 