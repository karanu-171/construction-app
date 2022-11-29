const express = require("express");
const cors = require('cors')
const http = require('http')
const dotenv = require('dotenv')
const { Server } = require('socket.io');

const app = express()
app.use(express.json());
app.use(cors());

dotenv.config()

const port = process.env.PORT || 8000;

const server  = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5173", 
        methods: ["GET, POST"]
    },
});

io.on("connection", (socket)=>{
    console.log(`User connected: ${socket.id}`);

    // socket .on create_room
    // Room creation details
    // Room ID => employer_id + employee_id
    

    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log(`User with ID ${socket.id} joined room ${data}`);
    });
    socket.on("send_message", (data)=>{
        //
        socket.to(data.room).emit("receive_message", data)
    })
    socket.on("disconnect", ()=>{
        console.log("User disconnected", socket.id)
    })
});




server.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})