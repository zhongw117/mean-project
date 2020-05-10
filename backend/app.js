const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Post = require('./models/post');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wilson:e8LbS5YH0wMcPgLw@nodejsangular-wuf0b.mongodb.net/node-angular?retryWrites=true&w=majority') // database name: node-angular
  .then(() => {
    console.log('Connected to Mongodb successfully!');
  })
  .catch(() => {
    console.log('Connection failed');
  })

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
  const post = Post({
    title: req.body.title,
    content: req.body.content
  });
  // console.log(post);
  post.save().then(postData => {
    res.status(201).json({
      message: "Post added successfully!",
      postId: postData.id
    });
  });
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Posts fetched successfully',
      posts: documents
    });
  });

});

app.delete('/api/posts/:id', (req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: "Post deleted successfully"});
  });
})

// patch only update the query, while put can create a new one
app.put("/api/posts/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  })
  Post.updateOne({_id: req.params.id}, post).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successfully!"});
  })
});


module.exports = app;


// e8LbS5YH0wMcPgLw
