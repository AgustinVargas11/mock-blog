const express = require('express');
const Router = express.Router();
const Post = require('../schemas/post');

Router.route('/')
    .get((req, res) => {
        Post.find({}, '-content', (err, posts) => {
            if (err) return res.status(500).send(err);
            res.send(posts);
        }).sort({ createdAt: -1 })
    })
    .post((req, res) => {
        const newPost = new Post(req.body);

        newPost.save((err, savedPost) => {
            if (err) return res.status(500).send(err);
            res.send(savedPost);
        })
    });

Router.route('/:id')
    .get((req, res) => {
        const { id } =req.params;

        Post.findById(id, (err, post) => {
            if (err) return res.status(404).send(err);
            res.send(post);
        })
    })
    .delete((req, res) => {
        const { id } =req.params;

        Post.findByIdAndRemove(id, (err, deletedPost) => {
            if (err) return res.status(404).send(err);
            res.send(deletedPost);
        })
    });

module.exports = Router;