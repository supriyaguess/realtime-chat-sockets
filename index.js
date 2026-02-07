const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let onlineUsers = 0;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", (socket) => {
  onlineUsers++;
  io.emit("online-users", onlineUsers);

  socket.on("join-room", ({ username, room }) => {
    socket.username = username;
    socket.room = room;
    socket.join(room);

    io.to(room).emit("system-message", `${username} joined ${room}`);
  });

  socket.on("user-message", (message) => {
    io.to(socket.room).emit("message", {
      user: socket.username,
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    });
  });

  socket.on("typing", () => {
    socket.broadcast.to(socket.room).emit("typing", socket.username);
  });

  socket.on("disconnect", () => {
    onlineUsers--;
    io.emit("online-users", onlineUsers);

    if (socket.username && socket.room) {
      io.to(socket.room).emit(
        "system-message",
        `${socket.username} left the chat`
      );
    }
  });
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
