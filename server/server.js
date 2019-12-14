const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const publicPath = path.join(__dirname, '..', 'public');
const notesPath = path.join(__dirname, '..', 'documents', 'notes');
const postsPath = path.join(__dirname, '..', 'documents', 'posts');

app.use(express.static(publicPath));
app.use(cors());

app.get('/docs/notes/:parent/:child', (req, res) => {
  res.sendFile(path.join(notesPath, req.params.parent, req.params.child));
});
app.get('/docs/posts/:post', (req, res) => {
  res.sendFile(path.join(postsPath, req.params.post));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.info('running on 3000...');
});
