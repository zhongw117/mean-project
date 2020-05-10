const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, HttpHeaders"
    );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, PUT, OPTIONS"
  );
    next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully!",
    status: 200
  });
})

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '343231',
      title: 'first servier side pot',
      content: 'ewrerq'
    },
    {
      id: '2',
      title: 'second servier side pot',
      content: 'ewrerq'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
