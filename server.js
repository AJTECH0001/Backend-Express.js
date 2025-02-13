const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
    id: 1,
    name: 'John Doe',
  });
})

app.get('/messages', (req, res) => {
  res.send('<ul><li>Message 1</li><li>Message 2</li></ul>');
})

app.post('/', (req, res) => {
  res.send('Upddating messages...');
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});