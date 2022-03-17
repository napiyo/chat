
const express = require('express');
const app = express();
const path =require('path')
const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
        origin: "*",
        
      }
});
const PORT =  process.env.PORT || 4000
let users=[{}];
app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./frontend/build/index.html"))
})

io.on("connection",(socket)=>{
  
    socket.on("sendMessage",(data)=>{
     
        io.emit("recieveMsg",data)
    }) 
    socket.on("joined",(data)=>{
        users[socket.id]=data.userName;
        socket.broadcast.emit("recieveMsg",data)
    }) 
    socket.on("disconnect",()=>{
     
        socket.broadcast.emit("recieveMsg",{type:"info",info:`${users[socket.id]} left chat`})
    })
    

        
    
})
server.listen(PORT)