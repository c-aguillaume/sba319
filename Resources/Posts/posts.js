const express = require('express')
const postsRoutes = express.Router()
const posts = [
{
    userId: 1,
    title: "Todays topic",
    message: ""

}
]

postsRoutes
    .route('/')
    .get((req, res) => {
        res.json(posts)
    })
    .post((req, res) => {
        const newPost = req.body;
        posts.push(newPost);
        res.status(201).json({message: 'Post added successful', post: newPost});
    });

module.exports = postsRoutes