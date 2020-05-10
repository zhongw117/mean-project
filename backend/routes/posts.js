const express = require("express");
const Post = require('../models/post');

const router = express.Router();

router.post("", (req, res, next) => {
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

router.get("", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Posts fetched successfully',
      posts: documents
    });
  });

});

router.delete('/:id', (req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: "Post deleted successfully"});
  });
})

// patch only update the query, while put can create a new one
router.put("/:id", (req, res, next) => {
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

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({message: "not found!"})
    }
  })
})

module.exports = router;
