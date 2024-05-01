// Create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comments by ID
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});