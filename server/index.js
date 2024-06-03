const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

let codeData = { html: '', css: '', js: '' };

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.emit('update', codeData);

  socket.on('codeChange', (data) => {
    codeData = data;
    socket.broadcast.emit('update', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
