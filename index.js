const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cv = require("opencv4nodejs");

const vedio = require("./Route/video")

const wcap = new cv.VideoCapture(0);

server.listen(3000,()=>{
    console.log("listen to port 3000");
});


app.use("/api/video",vedio);

setInterval(()=>{
    const frame = wcap.read();
    const image = cv.imencode(".jpg",frame).toString("base64");
   // console.log(image)
io.emit("image",image);
},100)