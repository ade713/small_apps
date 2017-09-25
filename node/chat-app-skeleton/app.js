const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res.send('h3ll0 w0rld!!!');
// });


app.use(express.static('public'));

app.listen(3003, () => {
  console.log('Chat App listening on port 3003');
});