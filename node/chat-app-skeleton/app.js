const express = require('express');
const app = express();
const path = require('path');

// app.get('/', (req, res) => {
//   res.send('h3ll0 w0rld!!!');
// });


app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3003, () => {
  console.log('Chat App listening on port 3003');
});