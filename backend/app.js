const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const postsRoutes = require("./routes/posts");

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

app.use("/api/posts",postsRoutes);

module.exports = app;


// e8LbS5YH0wMcPgLw
