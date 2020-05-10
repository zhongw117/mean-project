const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
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
