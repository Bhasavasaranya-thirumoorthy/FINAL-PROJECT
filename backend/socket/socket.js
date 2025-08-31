// import {Server} from "socket.io";
// import http from 'http';
// import express from 'express';

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server,{
//     cors:{
//         origin:["http://localhost:3000"],
//         methods:["GET","POST"]
//     }
// });

// export const getReceiverSocketId = (receiverId) => {
//     return userSocketMap[receiverId];
// }

// const userSocketMap = {}; //{userId:socketId}

// io.on('connection',(socket)=>{
//     console.log("a user connected", socket.id);

//     const userId = socket.handshake.query.userId;
//     if(userId!= "undefined") userSocketMap[userId] = socket.id;

//     io.emit("getOnlineUsers",Object.keys(userSocketMap))

//     socket.on("disconnect",()=>{
//         console.log("user disconnected", socket.id)
//         delete userSocketMap[userId]
//         io.emit("getOnlineUsers",Object.keys(userSocketMap))
//     })
// })


// export {app,io,server}

// chatgpt

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {}; // { userId: socketId }

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId) {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} mapped to socket ${socket.id}`);
  }

  // Emit online users to everyone
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);

    if (userId) {
      delete userSocketMap[userId];
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };


// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//   },
// });

// const userSocketMap = {}; // { userId: socketId }

// io.on("connection", (socket) => {
//   console.log("a user connected", socket.id);

//   const userId = socket.handshake.query.userId;

//   if (userId) {
//     userSocketMap[userId] = socket.id; // ✅ FIXED
//   }

//   // Send updated online users to everyone
//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("disconnect", () => {
//     console.log("user disconnected", socket.id);

//     if (userId) {
//       delete userSocketMap[userId];
//     }

//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   });
// });

// export { app, io, server };
