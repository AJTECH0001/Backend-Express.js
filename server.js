const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'John Doe Mike',
  },
  {
    id: 1,
    name: 'Doe John Judge',
  }
];

app.use((req, res, next) => { 
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} request for ${req.url}${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req, res) => {

  if (!req.body.name) {
    res.status(400).json({error: "Name is required"});
  }
  const newFriend = {
    name: req.body,
    id: friends.length
  };
  friends.push(newFriend);

  res.json(newFriend); 
})

app.get('/friends', (req, res) => {
  res.json(friends);
})

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({error: "Friend does not exist"}); 
  }
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Message 1</li><li>Message 2</li></ul>');
})

app.post('/', (req, res) => {
  res.send('Upddating messages...');
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});