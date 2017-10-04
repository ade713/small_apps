const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const chatServer = http.createServer(app).listen(3003);
const io = require('socket.io').listen(chatServer);

// app.get('/', (req, res) => {
//   res.send('h3ll0 w0rld!!!');
// });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});

const port = 3030;


app.listen(port, () => {
  console.log(`Chat App listening on port ${port}`);
});