const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("join-room", (room, id) => {
    socket.join(room);
    io.to(room).emit("user-connected", id);
    socket.on("disconnect", () => {
      io.to(room).emit("user-disconnected", id);
    });
  });
});

server.listen(5000);
